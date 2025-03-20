import { Field, InputType, registerEnumType } from '@nestjs/graphql';

export enum CallSignalType {
  'ICE_CANDIDATE' = 'ICE_CANDIDATE',
  'OFFER' = 'OFFER',
  'ANSWER' = 'ANSWER',
}

registerEnumType(CallSignalType, {
  name: 'CallSignalType',
});

@InputType()
export class CallSignalInput {
  @Field((type) => CallSignalType)
  type: CallSignalType;

  @Field((type) => String)
  payload: string;

  @Field((type) => String)
  chatID: string;
}
