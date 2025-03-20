import React, {FC, useState, useCallback} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useMutation, graphql} from 'react-relay';
import {MessageInputMutation} from './__generated__/MessageInputMutation.graphql';
import {palette} from '../palette';

type MessageInputProps = {
  connectionID: string;
  chatID: string;
  onType: () => void;
};

const SEND_MESSAGE_MUTATION = graphql`
  mutation MessageInputMutation(
    $input: SendMessageInput!
    $connections: [ID!]!
  ) {
    sendMessage(input: $input) {
      messageEdge @appendEdge(connections: $connections) {
        cursor
        node {
          ...MessageItem_data
        }
      }
    }
  }
`;

const SendButton: FC<{disabled: boolean; onPress: () => void}> = ({
  disabled,
  onPress,
}) => (
  <View style={styles.buttonContainer}>
    <Button title="Send" disabled={disabled} onPress={onPress} />
  </View>
);

export const MessageInput: FC<MessageInputProps> = ({
  connectionID,
  chatID,
  onType,
}) => {
  const [text, setText] = useState('');
  const [commit] = useMutation<MessageInputMutation>(SEND_MESSAGE_MUTATION);

  const handleSendMessage = useCallback(() => {
    if (!text.trim()) return;

    commit({
      variables: {
        input: {
          text: text.trim(),
          chatID,
        },
        connections: [connectionID],
      },
      onCompleted: () => {
        setText('');
      },
    });
  }, [text, chatID, connectionID, commit]);

  return (
    <View style={styles.container}>
      <TextInput
        multiline
        placeholder="Message..."
        value={text}
        onChangeText={setText}
        onKeyPress={onType}
        style={styles.input}
      />
      <SendButton disabled={!text.trim()} onPress={handleSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.white,
    padding: 16,
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    padding: 10,
    overflow: 'visible',
    color: palette.textBlack,
    flex: 1,
    flexGrow: 1,
  },
  buttonContainer: {
    flexShrink: 0,
  },
});
