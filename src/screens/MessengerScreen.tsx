import React, {FC} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../App';
import {MessengerPage} from '../components/MessengerPage';

export const MessengerScreen: FC<
  NativeStackScreenProps<StackParamList, 'Messenger'>
> = ({route}) => {
  return <MessengerPage chatID={route.params.chatID} />;
};
