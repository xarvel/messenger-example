import {graphql, useMutation} from 'react-relay';

import {useCallback} from 'react';
import {
  useSendCallSignalMutation,
  CallSignalType,
} from './__generated__/useSendCallSignalMutation.graphql.ts';

export const useSendCallSignal = (chatID: string) => {
  const [sendCallSignal] = useMutation<useSendCallSignalMutation>(graphql`
    mutation useSendCallSignalMutation($input: CallSignalInput!) {
      sendCallSignal(input: $input)
    }
  `);

  const handleSendCallSignal = useCallback(
    (type: CallSignalType, payload: string) => {
      sendCallSignal({
        variables: {
          input: {
            type,
            payload,
            chatID,
          },
        },
      });
    },
    [chatID, sendCallSignal],
  );

  return {sendCallSignal: handleSendCallSignal};
};
