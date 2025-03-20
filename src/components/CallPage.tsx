import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MediaStream, RTCView} from 'react-native-webrtc';
import {palette} from '../palette.ts';
import {PhoneHangupIcon} from './icons/PhoneHangupIcon';
import {CallStatus} from '../hooks/useWebRTCCall.ts';

type CallPageProps = {
  remoteStream: MediaStream | null;
  localStream: MediaStream | null;
  onHangUp: () => void;
  callStatus: CallStatus;
};

export const CallPage: FC<CallPageProps> = ({
  remoteStream,
  onHangUp,
  localStream,
  callStatus,
}) => {
  const getStatusText = () => {
    switch (callStatus) {
      case 'connecting':
        return 'Connecting...';
      case 'active':
        return 'Call in progress';
      case 'ended':
        return 'Call ended';
    }
  };

  return (
    <View style={styles.container}>
      {remoteStream && (
        <RTCView
          streamURL={remoteStream.toURL()}
          style={styles.remoteStream}
          objectFit="cover"
        />
      )}

      {localStream && (
        <RTCView
          streamURL={localStream.toURL()}
          style={styles.localStream}
          objectFit="cover"
          zOrder={1}
        />
      )}

      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>{getStatusText()}</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.controlButton, styles.hangupButton]}
          onPress={onHangUp}>
          <PhoneHangupIcon size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.black,
  },
  remoteStream: {
    flex: 1,
    width: '100%',
  },
  localStream: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 100,
    height: 150,
    borderRadius: 10,
    zIndex: 2,
  },
  statusContainer: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  statusText: {
    color: palette.white,
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
  },
  controlButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hangupButton: {
    backgroundColor: palette.red,
  },
  controlText: {
    color: palette.white,
    fontSize: 14,
    textAlign: 'center',
  },
});
