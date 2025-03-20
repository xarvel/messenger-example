import React, {FC} from 'react';
import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {useFragment, graphql} from 'react-relay';
import {palette} from '../palette';

type MessageSide = 'left' | 'right';

type MessageItemProps = {
  dataRef: any;
  getSide: (userID: string) => MessageSide;
  getName: (userID: string) => string;
};

type SideMap<T> = Record<MessageSide, T>;

const createSideMap = <T extends unknown>(left: T, right: T): SideMap<T> => ({
  left,
  right,
});

const formatMessageTime = (date: Date): string =>
  new Date(date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

const MessageContent: FC<{
  text: string;
  textColor: string;
  backgroundColor: string;
}> = ({text, textColor, backgroundColor}) => (
  <View style={[styles.messageContainer, {backgroundColor}]}>
    <Text style={{color: textColor}}>{text}</Text>
  </View>
);

const MessageMeta: FC<{
  senderName: string;
  time: string;
  side: MessageSide;
}> = ({senderName, time, side}) => (
  <View
    style={[
      styles.metaContainer,
      {justifyContent: side === 'left' ? 'flex-start' : 'flex-end'},
    ]}>
    <Text style={styles.metaText}>{`${senderName} ${time}`}</Text>
  </View>
);

export const MessageItem: FC<MessageItemProps> = ({
  dataRef,
  getSide,
  getName,
}) => {
  const data = useFragment(
    graphql`
      fragment MessageItem_data on Message {
        id
        text
        senderID
        creationDate
      }
    `,
    dataRef,
  );

  const side = getSide(data.senderID);
  const backgroundColor = createSideMap(palette.white, '#344054')[side];
  const textColor = createSideMap(palette.textBlack, palette.textWhite)[side];
  const senderName = getName(data.senderID);

  return (
    <View style={[styles.container, styles[side]]}>
      <MessageContent
        text={data.text}
        textColor={textColor}
        backgroundColor={backgroundColor}
      />
      <MessageMeta
        senderName={senderName}
        time={formatMessageTime(data.creationDate)}
        side={side}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  metaText: {
    color: '#667085',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 4,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  container: {
    marginVertical: 4,
    maxWidth: '70%',
    minWidth: '30%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  left: {
    marginRight: 'auto',
    marginLeft: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  right: {
    marginLeft: 'auto',
    marginRight: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});
