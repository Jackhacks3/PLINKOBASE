import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Dimensions, Animated, Text } from 'react-native';
import Matter from 'matter-js';
import { ThemedView } from './ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

const { width, height } = Dimensions.get('window');

// Constants for the Plinko board
const BOARD_WIDTH = width - 40;
const BOARD_HEIGHT = height * 0.6;
const PEG_RADIUS = 5;
const BALL_RADIUS = 10;
const PEG_SPACING_HORIZONTAL = BOARD_WIDTH / 10;
const PEG_SPACING_VERTICAL = 50;
const ROWS = 10;
const COLUMNS = 8;

// Payout slots configuration
const SLOTS = [
  { multiplier: 0.1, probability: 0.25, color: '#e74c3c' },   // Very common, small payout
  { multiplier: 0.5, probability: 0.20, color: '#e67e22' },   // Common, medium-small payout
  { multiplier: 1, probability: 0.18, color: '#f1c40f' },     // Medium, break-even
  { multiplier: 2, probability: 0.15, color: '#2ecc71' },     // Uncommon, medium payout
  { multiplier: 5, probability: 0.10, color: '#3498db' },     // Rare, large payout
  { multiplier: 10, probability: 0.07, color: '#9b59b6' },    // Very rare, very large payout
  { multiplier: 50, probability: 0.04, color: '#8e44ad' },    // Extremely rare, huge payout
  { multiplier: "JACKPOT", probability: 0.01, color: '#FFD700' }, // Jackpot
];

interface PlinkoProps {
  onWin: (amount: number | 'JACKPOT') => void;
  dropBall: boolean;
  resetDropBall: () => void;
}

const PlinkoBoard: React.FC<PlinkoProps> = ({ onWin, dropBall, resetDropBall }) => {
  const colorScheme = useColorScheme();
  const [landed, setLanded] = useState(false);
  const [winningSlot, setWinningSlot] = useState<number | null>(null);
  const containerRef = useRef<View>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const worldRef = useRef<Matter.World | null>(null);
  const ballRef = useRef<Matter.Body | null>(null);
  const animatedValues = useRef(SLOTS.map(() => new Animated.Value(0))).current;
  
  // Setup the engine and world
  useEffect(() => {
    // Create engine and world
    const engine = Matter.Engine.create({
      enableSleeping: false,
      gravity: { x: 0, y: 1, scale: 0.001 },
    });
    
    engineRef.current = engine;
    worldRef.current = engine.world;
    
    // Create walls
    const leftWall = Matter.Bodies.rectangle(
      0, BOARD_HEIGHT / 2, 10, BOARD_HEIGHT, { 
        isStatic: true,
        restitution: 0.3,
        friction: 0,
      }
    );
    
    const rightWall = Matter.Bodies.rectangle(
      BOARD_WIDTH, BOARD_HEIGHT / 2, 10, BOARD_HEIGHT, { 
        isStatic: true,
        restitution: 0.3,
        friction: 0,
      }
    );
    
    // Create floor
    const floor = Matter.Bodies.rectangle(
      BOARD_WIDTH / 2, BOARD_HEIGHT, BOARD_WIDTH, 10, { 
        isStatic: true,
        restitution: 0,
        friction: 0,
      }
    );
    
    // Create separators for the slots
    const separators = [];
    const slotWidth = BOARD_WIDTH / SLOTS.length;
    
    for (let i = 1; i < SLOTS.length; i++) {
      const separator = Matter.Bodies.rectangle(
        i * slotWidth, BOARD_HEIGHT - 15, 2, 30, {
          isStatic: true,
          friction: 0,
          restitution: 0.3,
        }
      );
      separators.push(separator);
    }
    
    // Create pegs
    const pegs = [];
    const offsetX = BOARD_WIDTH / (COLUMNS + 1);
    const startY = 50;
    
    for (let row = 0; row < ROWS; row++) {
      const cols = row % 2 === 0 ? COLUMNS : COLUMNS + 1;
      const currentOffsetX = row % 2 === 0 ? offsetX : offsetX / 2;
      
      for (let col = 0; col < cols; col++) {
        const peg = Matter.Bodies.circle(
          currentOffsetX + col * offsetX, 
          startY + row * PEG_SPACING_VERTICAL, 
          PEG_RADIUS, 
          {
            isStatic: true,
            friction: 0,
            restitution: 0.5,
          }
        );
        pegs.push(peg);
      }
    }
    
    // Add all bodies to the world
    Matter.World.add(engine.world, [
      leftWall, 
      rightWall, 
      floor, 
      ...separators,
      ...pegs
    ]);
    
    // Start the engine
    Matter.Runner.run(engine);
    
    // Cleanup on unmount
    return () => {
      Matter.Engine.clear(engine);
    };
  }, []);

  // Handle dropping a ball
  useEffect(() => {
    if (dropBall && engineRef.current && worldRef.current) {
      // Create a new ball
      const ball = Matter.Bodies.circle(
        BOARD_WIDTH / 2 + (Math.random() * 40 - 20), // Random starting position with slight variation
        20, // Start at the top of the board
        BALL_RADIUS,
        {
          restitution: 0.5, // Bounciness
          friction: 0.001,   // Low friction
          frictionAir: 0.001, // Low air resistance
          density: 0.1,     // Density affects mass
        }
      );
      
      Matter.World.add(worldRef.current, ball);
      ballRef.current = ball;
      setLanded(false);
      resetDropBall();
      
      // Add collision detection for slots
      Matter.Events.on(engineRef.current, 'collisionStart', (event: Matter.IEventCollision<Matter.Engine>) => {
        const pairs = event.pairs;
        
        for (let i = 0; i < pairs.length; i++) {
          const pair = pairs[i];
          
          // Check if the ball has hit the floor
          if (
            (pair.bodyA === ball && pair.bodyB.position.y > BOARD_HEIGHT - 20) ||
            (pair.bodyB === ball && pair.bodyA.position.y > BOARD_HEIGHT - 20)
          ) {
            if (!landed) {
              setLanded(true);
              
              // Calculate which slot the ball landed in
              const slotWidth = BOARD_WIDTH / SLOTS.length;
              const ballX = ball.position.x;
              const slotIndex = Math.min(
                Math.floor(ballX / slotWidth),
                SLOTS.length - 1
              );
              
              setWinningSlot(slotIndex);
              animateWinningSlot(slotIndex);
              
              // Trigger win callback
              const slot = SLOTS[slotIndex];
              onWin(slot.multiplier as number | 'JACKPOT');
              
              // Remove the ball after a delay
              setTimeout(() => {
                if (worldRef.current && ballRef.current) {
                  Matter.World.remove(worldRef.current, ballRef.current);
                  ballRef.current = null;
                }
              }, 2000);
            }
          }
        }
      });
    }
  }, [dropBall, onWin, resetDropBall]);
  
  // Function to animate the winning slot
  const animateWinningSlot = (index: number) => {
    Animated.sequence([
      Animated.timing(animatedValues[index], {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValues[index], {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <ThemedView style={styles.container}>
      {/* Pegs rendered using CSS positioning */}
      <View style={styles.pegContainer}>
        {Array.from({ length: ROWS }).map((_, rowIndex) => {
          const cols = rowIndex % 2 === 0 ? COLUMNS : COLUMNS + 1;
          const currentOffsetX = rowIndex % 2 === 0 ? PEG_SPACING_HORIZONTAL : PEG_SPACING_HORIZONTAL / 2;
          
          return Array.from({ length: cols }).map((_, colIndex) => (
            <View
              key={`peg-${rowIndex}-${colIndex}`}
              style={[
                styles.peg,
                {
                  left: currentOffsetX + colIndex * PEG_SPACING_HORIZONTAL - PEG_RADIUS,
                  top: 50 + rowIndex * PEG_SPACING_VERTICAL - PEG_RADIUS,
                  backgroundColor: Colors[colorScheme ?? 'light'].text,
                },
              ]}
            />
          ));
        })}
      </View>
      
      {/* Ball drop area */}
      <View style={styles.dropArea} />
      
      {/* Payout slots at the bottom */}
      <View style={styles.slotsContainer}>
        {SLOTS.map((slot, index) => (
          <Animated.View
            key={`slot-${index}`}
            style={[
              styles.slot,
              {
                backgroundColor: slot.color,
                width: BOARD_WIDTH / SLOTS.length,
                transform: [
                  {
                    scale: animatedValues[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 1.2],
                    }),
                  },
                ],
              },
              winningSlot === index && styles.activeSlot,
            ]}
          >
            <Text style={styles.slotText}>
              {slot.multiplier === 'JACKPOT' ? 'JP' : `${slot.multiplier}x`}
            </Text>
          </Animated.View>
        ))}
      </View>
      
      {/* If a ball is dropped, render it */}
      {dropBall && ballRef.current && (
        <View
          style={[
            styles.ball,
            {
              left: ballRef.current.position.x - BALL_RADIUS,
              top: ballRef.current.position.y - BALL_RADIUS,
            },
          ]}
        />
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: BOARD_WIDTH,
    height: BOARD_HEIGHT,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  pegContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  peg: {
    width: PEG_RADIUS * 2,
    height: PEG_RADIUS * 2,
    borderRadius: PEG_RADIUS,
    position: 'absolute',
  },
  dropArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: 'rgba(100, 100, 100, 0.2)',
  },
  slotsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    flexDirection: 'row',
  },
  slot: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slotText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  activeSlot: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  ball: {
    width: BALL_RADIUS * 2,
    height: BALL_RADIUS * 2,
    borderRadius: BALL_RADIUS,
    backgroundColor: '#ff6b6b',
    position: 'absolute',
  },
});

export default PlinkoBoard; 