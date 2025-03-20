# Messenger Example

A real-time messaging application built with React Native and NestJS, featuring GraphQL subscriptions for live updates.

![plot](./demo.png)


## Features

- Real-time messaging with GraphQL subscriptions
- User authentication
- Chat rooms
- Message history
- Typing indicators
- Message updates and deletions
- Modern UI with React Native
- WebRTC support

## Tech Stack

### Frontend
- React Native 0.77.2
- React 18.3.1
- GraphQL (Relay 18.2.0)
- TypeScript 5.0.4
- React Navigation 7.x
- React Native WebRTC

### Backend
- NestJS 10.x
- GraphQL (Apollo Server 4.x)
- WebSocket subscriptions
- TypeScript 5.1.3

## Prerequisites

- Node.js >= 18
- iOS Simulator (for iOS development)
- Android Studio (for Android development)
- Xcode (for iOS development)

## Getting Started

1. Install dependencies:
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend && npm install
```

2. Start the development servers:
```bash
# Start backend (in one terminal)
npm run backend

# Start frontend (in another terminal)
npm run ios     # For iOS
npm run android # For Android
```

3. Login as either User 1 or User 2 to test the messaging functionality

## Development

- Backend runs on NestJS with GraphQL
- GraphQL schema is automatically generated
- Relay compiler watches for changes
- TypeScript for type safety
- ESLint and Prettier for code formatting

## Scripts

### Frontend
- `npm run ios` - Run iOS app
- `npm run android` - Run Android app
- `npm run relay` - Run Relay compiler
- `npm run lint` - Run ESLint
- `npm test` - Run tests

### Backend
- `npm run start:dev` - Run backend in development mode
- `npm run build` - Build backend
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
