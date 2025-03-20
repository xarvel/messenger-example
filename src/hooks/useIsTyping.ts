import {graphql, useMutation, useSubscription} from 'react-relay';
import {GraphQLSubscriptionConfig} from 'relay-runtime';
import {useMemo, useState, useRef, useCallback} from 'react';
import {useIsTypingSubscription} from './__generated__/useIsTypingSubscription.graphql';

export const useIsTyping = (chatID: string): [string | null, () => void] => {
  const [isTyping, setIsTyping] = useState<string | null>(null);
  const [commit] = useMutation<useIsTypingSubscription>(graphql`
    mutation useIsTypingMutation($chatID: String!) {
      setTyping(chatID: $chatID)
    }
  `);

  const isTypingResetTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const config: GraphQLSubscriptionConfig<useIsTypingSubscription> = useMemo(
    () => ({
      variables: {
        chatID,
      },
      subscription: graphql`
        subscription useIsTypingSubscription($chatID: String!) {
          isTyping(chatID: $chatID)
        }
      `,
      onNext(response) {
        if (response?.isTyping) {
          if (isTypingResetTimeout.current) {
            clearTimeout(isTypingResetTimeout.current);
          }

          setIsTyping(response.isTyping);

          isTypingResetTimeout.current = setTimeout(() => {
            setIsTyping(null);
          }, 1000);
        }
      },
    }),
    [chatID],
  );

  useSubscription(config);

  const handleSetTyping = useCallback(() => {
    commit({
      variables: {chatID},
    });
  }, [commit, chatID]);

  return [isTyping, handleSetTyping];
};
