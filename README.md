# Plinko Lottery Game

A decentralized Plinko lottery game built with React Native and Expo.

## Overview

This application simulates a Plinko board where users can purchase and drop virtual balls. Each ball costs a fixed amount of $1 USD and can land in different slots with varying payouts, including a progressive jackpot.

### Game Mechanics

- Users purchase balls for $1.00 USD each
- A small house fee of $0.005 USD (0.5 cents) is deducted from each purchase
- The remaining $0.995 is allocated to payouts and the progressive jackpot
- The physics simulation ensures realistic ball movement and collisions
- Balls can land in different payout slots, each with a specific multiplier
- Players can win a progressive jackpot by landing in the jackpot slot

## Implementation Details

### Physics Engine

The game uses Matter.js, a 2D physics engine, to simulate the realistic movement of balls through the Plinko board:

- Ball physics are tuned for realistic bouncing and collisions
- Pegs are arranged in a staggered pattern to create unpredictable paths
- The slot a ball lands in determines the payout

### Payout Structure

The game features various payout slots with different probabilities:

- Small payouts (0.1x to 1x) - More common
- Medium payouts (2x to 5x) - Less common
- Large payouts (10x to 50x) - Rare
- Jackpot - Very rare (approximately 1% probability)

### Progressive Jackpot

- The jackpot increases with each ball dropped
- 50% of the remaining amount after the house fee is added to the jackpot
- When a player wins the jackpot, it resets to a base amount

## How to Run

1. Ensure you have Node.js and npm installed
2. Install Expo CLI: `npm install -g expo-cli`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Use the Expo Go app on your mobile device or run in a simulator

## Technologies Used

- React Native
- Expo
- Matter.js for physics simulation
- TypeScript

## Future Enhancements

- Integration with cryptocurrency wallets for real crypto payouts
- Multiplayer functionality to compete with friends
- Additional game modes and board layouts
- Leaderboards and achievements

## License

This project is licensed under the MIT License - see the LICENSE file for details.
