import React, {FC, useCallback} from 'react';
import {Alert} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../App';
import {useWebRTCCall} from '../hooks/useWebRTCCall';
import {CallPage} from '../components/CallPage';
import {useFocusEffect} from '@react-navigation/native';

export const CallScreen: FC<NativeStackScreenProps<StackParamList, 'Call'>> = ({
  navigation,
  route,
}) => {
  const {chatID, incomingSignal} = route.params;

  const {
    localStream,
    remoteStream,
    endCall,
    startCall,
    initializeWebRTC,
    acceptCall,
    callStatus,
    cleanupCall,
  } = useWebRTCCall(chatID, {
    onCallEnded: useCallback(() => {
      navigation.goBack();
    }, [navigation]),
  });

  const initializeCall = useCallback(async () => {
    try {
      const pc = await initializeWebRTC();

      // If this is the caller (not incoming call), create and send offer
      if (incomingSignal) {
        acceptCall(incomingSignal.payload);
      } else {
        startCall(pc);
      }
    } catch (err) {
      console.error('Error initializing WebRTC:', err);
      Alert.alert('Error', 'Could not access camera or microphone');
      navigation.goBack();
    }
  }, [initializeWebRTC, incomingSignal, acceptCall, startCall, navigation]);

  useFocusEffect(
    useCallback(() => {
      initializeCall();
      return () => {
        cleanupCall();
      };
    }, []),
  );

  return (
    <CallPage
      localStream={localStream}
      remoteStream={remoteStream}
      onHangUp={endCall}
      callStatus={callStatus}
    />
  );
};
