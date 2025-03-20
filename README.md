# Messenger Example

A real-time messaging application built with React Native (Expo) and NestJS, featuring GraphQL subscriptions for live updates.

## Features

- Real-time messaging with GraphQL subscriptions
- User authentication
- Chat rooms
- Message history
- Typing indicators
- Message updates and deletions
- Modern UI with React Native

## Tech Stack

### Frontend
- React Native (Expo)
- GraphQL (Relay)
- TypeScript
- Expo Router
- React Native Reanimated

### Backend
- NestJS
- GraphQL (Apollo)
- WebSocket subscriptions
- TypeScript

## Project Structure

```
messenger-example/
├── app/                    # Expo Router pages
├── src/                    # Frontend source code
│   ├── __generated__/     # Generated Relay types
│   ├── transport/         # GraphQL client setup
│   └── components/        # React components
└── backend/               # NestJS backend
    └── src/
        ├── auth/         # Authentication
        ├── chats/        # Chat management
        ├── messages/     # Message handling
        ├── users/        # User management
        └── viewer/       # Current user context
```

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

- Frontend runs on Expo
- Backend runs on NestJS with GraphQL
- GraphQL schema is automatically generated
- Relay compiler watches for changes