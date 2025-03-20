import {useMemo} from 'react';
import {graphql, useSubscription} from 'react-relay';
import {GraphQLSubscriptionConfig} from 'relay-runtime';
import {useCallEndedSubscription} from './__generated__/useCallEndedSubscription.graphql.ts';

export const useCallEnded = (chatID: string, onCallEnded: () => void) => {
  const callEndedSubscriptionConfig: GraphQLSubscriptionConfig<useCallEndedSubscription> =
    useMemo(() => {
      return {
        subscription: graphql`
          subscription useCallEndedSubscription($chatID: String!) {
            callEnded(chatID: $chatID)
          }
        `,
        variables: {chatID},
        onNext: () => {
          onCallEnded();
        },
      };
    }, [chatID, onCallEnded]);

  useSubscription(callEndedSubscriptionConfig);
};
