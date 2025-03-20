import {graphql, useSubscription} from 'react-relay';
import {useMemo} from 'react';
import {GraphQLSubscriptionConfig} from 'relay-runtime';
import {
  useCallSignalReceivedSubscription,
  useCallSignalReceivedSubscription$data,
} from './__generated__/useCallSignalReceivedSubscription.graphql.ts';

export type CallSignal =
  useCallSignalReceivedSubscription$data['callSignalReceived'];

export function useCallSignalReceived(
  chatID: string,
  onSignalReceived: (signal: CallSignal) => void,
) {
  const config: GraphQLSubscriptionConfig<useCallSignalReceivedSubscription> =
    useMemo(() => {
      return {
        subscription: graphql`
          subscription useCallSignalReceivedSubscription($chatID: String!) {
            callSignalReceived(chatID: $chatID) {
              type
              payload
              chatID
            }
          }
        `,
        variables: {chatID},
        onNext: response => {
          if (response?.callSignalReceived) {
            onSignalReceived(response.callSignalReceived);
          }
        },
        onError: (error: Error) => {
          console.error('Error in call signal subscription:', error);
        },
      };
    }, [chatID, onSignalReceived]);

  useSubscription(config);
}
