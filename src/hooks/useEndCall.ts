import {graphql, useMutation} from 'react-relay';
import {useEndCallMutation} from './__generated__/useEndCallMutation.graphql.ts';
import {useCallback} from 'react';

export const useEndCall = (chatID: string, onCallEnded: () => void) => {
  const [endCall] = useMutation<useEndCallMutation>(graphql`
    mutation useEndCallMutation($chatID: String!) {
      endCall(chatID: $chatID)
    }
  `);

  const handleEndCall = useCallback(() => {
    endCall({
      variables: {chatID},
      onCompleted: onCallEnded,
    });
  }, [endCall, onCallEnded, chatID]);

  return {endCall: handleEndCall};
};
