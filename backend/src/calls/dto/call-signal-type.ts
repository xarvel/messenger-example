import { Field, ObjectType } from '@nestjs/graphql';
import { CallSignalType } from './call-signal-input';

@ObjectType()
export class CallSignal {
  @Field((type) => CallSignalType)
  type: CallSignalType;

  @Field((type) => String)
  payload: string;

  @Field((type) => String)
  chatID: string;
}
