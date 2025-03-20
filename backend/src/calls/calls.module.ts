import { Module } from '@nestjs/common';
import { CallsResolver } from './calls.resolver';
import { ChatsService } from '../chats/chats.service';

@Module({
  providers: [ChatsService, CallsResolver],
})
export class CallsModule {}
