import {
  Resolver,
  Mutation,
  Args,
  Subscription,
  Context,
} from '@nestjs/graphql';
import { ForbiddenException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { filterRecipient } from '../messages/messages.resolver';
import { ChatsService } from '../chats/chats.service';
import { CallSignal } from './dto/call-signal-type';
import { CallSignalInput } from './dto/call-signal-input';
import { PubSub } from 'graphql-subscriptions';

export const pubSub = new PubSub();

@Resolver()
export class CallsResolver {
  constructor(private readonly chatsService: ChatsService) {}

  @UseGuards(new AuthGuard())
  @Mutation(() => Boolean)
  async sendCallSignal(
    @Args('input') input: CallSignalInput,
    @Context() context: any,
  ): Promise<boolean> {
    const { user } = context;
    const chat = await this.chatsService.findOneById(input.chatID);

    if (!chat) {
      throw new ForbiddenException();
    }

    console.log('payload', input.type, input.payload);

    chat.participants
      .filter((participant) => participant !== user.id)
      .forEach((participantID) => {
        pubSub.publish('callSignalReceived', {
          callSignalReceived: {
            type: input.type,
            payload: input.payload,
            chatID: chat.id,
          },
          userID: participantID,
          chatID: chat.id,
        });
      });

    return true;
  }

  @Mutation(() => Boolean)
  @UseGuards(new AuthGuard())
  async endCall(@Args('chatID') chatID: string, @Context() context: any) {
    const { user } = context;
    const chat = await this.chatsService.findOneById(chatID);

    if (!chat) {
      throw new ForbiddenException();
    }

    chat.participants
      .filter((participant) => participant !== user.id)
      .forEach((participantID) => {
        pubSub.publish('callEnded', {
          callEnded: true,
          userID: participantID,
          chatID: chat.id,
        });
      });

    return true;
  }

  @Subscription(() => CallSignal, {
    filter: filterRecipient,
  })
  callSignalReceived(@Args('chatID') chatID: string) {
    return pubSub.asyncIterableIterator('callSignalReceived');
  }

  @Subscription(() => Boolean, {
    filter: filterRecipient,
  })
  callEnded(@Args('chatID') chatID: string) {
    return pubSub.asyncIterableIterator('callEnded');
  }
}
