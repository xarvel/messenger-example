import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors({
    origin: process.env.NODE_ENV === 'development' ? '*' : false,
    credentials: true,
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`🚀 Server running on port ${port}`);
  console.log(`📝 GraphQL endpoint: http://localhost:${port}/graphql`);
}
bootstrap();
