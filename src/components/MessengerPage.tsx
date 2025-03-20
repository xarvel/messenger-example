import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {MessageInput} from './MessageInput';
import {MessagesList} from './MessagesList';
import {graphql, useLazyLoadQuery, ConnectionHandler} from 'react-relay';
import {MessengerPageQuery} from './__generated__/MessengerPageQuery.graphql';
import {useMessageAdded} from '../hooks/useMessageAdded';
import {useMessageRemoved} from '../hooks/useMessageRemoved';
import {useMessageUpdated} from '../hooks/useMessageUpdated';
import {palette} from '../palette';
import {useIsTyping} from '../hooks/useIsTyping';
import {useCallSignalReceived} from '../hooks/useCallSignalReceived';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../App';

type MessengerChatProps = {
  chatID: string;
};

export const MessengerPage: FC<MessengerChatProps> = ({chatID}) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const connectionID = ConnectionHandler.getConnectionID(
    'client:root',
    'MessagesListQuery_messages',
    {
      chatID,
    },
  );

  const query = useLazyLoadQuery<MessengerPageQuery>(
    graphql`
      query MessengerPageQuery($chatID: ID!) {
        viewer {
          currentUserID
        }
        chat(id: $chatID) {
          participants {
            id
            name
          }
        }
        ...MessagesList_meta @arguments(chatID: $chatID)
        ...MessagesList_messages @arguments(chatID: $chatID)
      }
    `,
    {
      chatID,
    },
    {
      fetchPolicy: 'store-and-network',
    },
  );

  useMessageAdded(chatID, connectionID);
  useMessageRemoved(chatID, connectionID);
  useMessageUpdated(chatID);

  const [isTyping, setIsTyping] = useIsTyping(chatID);

  // Add call signal subscription to handle incoming calls
  useCallSignalReceived(chatID, signal => {
    if (signal.type === 'OFFER') {
      console.log('offer received signal', signal);
      navigation.navigate('Call', {
        chatID,
        incomingSignal: signal,
      });
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
        }}
        keyboardVerticalOffset={100}>
        <MessagesList
          messagesRef={query}
          metaRef={query}
          chunkSize={20}
          isTypingUser={isTyping}
        />
        <MessageInput
          connectionID={connectionID}
          chatID={chatID}
          onType={setIsTyping}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
});
