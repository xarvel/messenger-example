# Messenger Backend

Real-time messaging backend built with NestJS and GraphQL.

## Tech Stack

- NestJS 10.x
- GraphQL (Apollo Server 4.x)
- TypeScript 5.1.3
- WebSocket subscriptions


## Setup

1. Install dependencies:
```bash
npm install
```
2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```
3. Start the development server:
```bash
npm run start:dev
```

## API Documentation

### GraphQL Endpoint
- URL: `http://localhost:4000/graphql`
- WebSocket: `ws://localhost:4000/graphql`

### Key Features

#### Chat
- Real-time messaging with subscriptions
- Message CRUD operations
- Typing indicators
- Message status updates

#### WebRTC
- Signaling server for peer connections
- ICE candidate exchange
- Room management

## Development

### Scripts
- `npm run start:dev` - Run in development mode
- `npm run build` - Build for production
- `npm run start:prod` - Run production build
- `npm run lint` - Run ESLint

## Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start:prod
```
