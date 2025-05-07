import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import PlinkoBoard from '@/components/PlinkoBoard';

const { width, height } = Dimensions.get('window');

export default function PlinkoScreen() {
  const colorScheme = useColorScheme();
  const [balance, setBalance] = useState(10.00); // Starting balance in USD
  const [jackpot, setJackpot] = useState(100.00); // Starting jackpot amount
  const [dropBall, setDropBall] = useState(false);
  
  // Function to handle dropping a ball
  const handleDropBall = () => {
    // Check if user has enough balance
    if (balance < 1) {
      alert('Insufficient balance. Please add funds.');
      return;
    }
    
    // Deduct the cost of the ball from balance
    setBalance(prevBalance => prevBalance - 1);
    
    // Add to jackpot (95% of the remaining amount after house fee)
    setJackpot(prevJackpot => prevJackpot + 0.5); // 50% of $0.995 goes to jackpot
    
    // Trigger ball drop
    setDropBall(true);
  };
  
  // Reset the drop ball state
  const resetDropBall = useCallback(() => {
    setDropBall(false);
  }, []);
  
  // Handle win events
  const handleWin = useCallback((amount: number | 'JACKPOT') => {
    if (amount === 'JACKPOT') {
      // Handle jackpot win
      setBalance(prevBalance => prevBalance + jackpot);
      setJackpot(50.00); // Reset jackpot to starting amount
      
      // Show a congratulatory message
      alert(`🎉 JACKPOT! You won $${jackpot.toFixed(2)}! 🎉`);
    } else {
      // Handle regular win
      const winAmount = amount;
      setBalance(prevBalance => prevBalance + winAmount);
      
      if (winAmount > 5) {
        // Show a congratulatory message for big wins
        alert(`🎉 Big Win! You won $${winAmount.toFixed(2)}! 🎉`);
      }
    }
  }, [jackpot]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        
        {/* Header information */}
        <View style={styles.header}>
          <View style={styles.balanceContainer}>
            <ThemedText style={styles.balanceLabel}>Balance:</ThemedText>
            <ThemedText style={styles.balanceValue}>${balance.toFixed(2)}</ThemedText>
          </View>
          
          <View style={styles.jackpotContainer}>
            <ThemedText style={styles.jackpotLabel}>Progressive Jackpot:</ThemedText>
            <ThemedText style={styles.jackpotValue}>${jackpot.toFixed(2)}</ThemedText>
          </View>
        </View>
        
        {/* Plinko board */}
        <View style={styles.boardContainer}>
          <PlinkoBoard 
            onWin={handleWin}
            dropBall={dropBall}
            resetDropBall={resetDropBall}
          />
        </View>
        
        {/* Controls */}
        <View style={styles.controls}>
          <TouchableOpacity 
            style={[
              styles.dropButton,
              { backgroundColor: Colors[colorScheme ?? 'light'].tint }
            ]} 
            onPress={handleDropBall}
            disabled={dropBall}
          >
            <Text style={styles.dropButtonText}>DROP BALL ($1.00)</Text>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    marginTop: 10,
  },
  balanceContainer: {
    alignItems: 'flex-start',
  },
  balanceLabel: {
    fontSize: 14,
    opacity: 0.7,
  },
  balanceValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  jackpotContainer: {
    alignItems: 'flex-end',
  },
  jackpotLabel: {
    fontSize: 14,
    opacity: 0.7,
  },
  jackpotValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700', // Gold color for jackpot
  },
  boardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 16,
  },
  controls: {
    paddingVertical: 20,
  },
  dropButton: {
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  dropButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 