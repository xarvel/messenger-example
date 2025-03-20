import {useCallback, useRef, useState} from 'react';
import {
  mediaDevices,
  MediaStream,
  RTCIceCandidate,
  RTCPeerConnection,
  RTCSessionDescription,
} from 'react-native-webrtc';
import {useEndCall} from './useEndCall.ts';
import {useSendCallSignal} from './useSendCallSignal.ts';
import {CallSignalType} from '../screens/__generated__/CallScreenSendCallSignalMutation.graphql.ts';
import {useCallEnded} from './useCallEnded.ts';
import {useCallSignalReceived} from './useCallSignalReceived.ts';

export type CallStatus = 'connecting' | 'active' | 'ended';

export const getLocalSteam = () =>
  mediaDevices.getUserMedia({
    audio: true,
    video: {
      frameRate: 30,
      facingMode: 'user',
    },
  });

export const getRTCPeerConnection = async () => {
  const iceServers = [
    {urls: 'stun:stun.l.google.com:19302'},
  ];

  // iceServers.push( {
  //   urls: 'turn:your.turn.server:3478',
  //   username: 'user',
  //   credential: 'password'
  // })

  // Create peer connection
  return new RTCPeerConnection({
    iceServers,
  });
};

export const useWebRTCCall = (
  chatID: string,
  {
    onCallEnded,
  }: {
    onCallEnded: () => void;
  },
) => {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [callStatus, setCallStatus] = useState<CallStatus>('connecting');
  const peerConnection = useRef<RTCPeerConnection | null>(null);

  const {endCall} = useEndCall(chatID, onCallEnded);
  const {sendCallSignal} = useSendCallSignal(chatID);

  useCallEnded(chatID, onCallEnded);

  const cleanupCall = useCallback(() => {
    setCallStatus('ended');
    // Close streams
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
    }

    // Close peer connection
    if (peerConnection.current) {
      peerConnection.current.close();
      peerConnection.current = null;
    }
  }, [localStream]);

  const startCall = useCallback(
    async (pc: RTCPeerConnection) => {
      try {
        const offer = await pc.createOffer({
          mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true,
            VoiceActivityDetection: true,
          },
        });
        await pc.setLocalDescription(offer);
        sendCallSignal('OFFER', JSON.stringify(offer));
      } catch (error) {
        console.error('Error creating offer:', error);
      }
    },
    [sendCallSignal],
  );

  const initializeWebRTC = useCallback(async () => {
    const stream = await getLocalSteam();
    setLocalStream(stream);

    // Create peer connection
    const pc = await getRTCPeerConnection();
    peerConnection.current = pc;

    // Add local stream to peer connection
    stream.getTracks().forEach(track => {
      pc.addTrack(track, stream);
    });

    // @ts-ignore
    pc.addEventListener('icecandidate', event => {
      if (event.candidate) {
        // Send ICE candidate to peer
        sendCallSignal('ICE_CANDIDATE', JSON.stringify(event.candidate));
      }
    });

    // @ts-ignore
    pc.addEventListener('track', event => {
      // When remote stream is received
      if (event.streams && event.streams[0]) {
        setRemoteStream(event.streams[0]);
        setCallStatus('active');
      }
    });

    // @ts-ignore
    pc.addEventListener('connectionstatechange', () => {
      if (pc.connectionState === 'connected') {
        setCallStatus('active');
      } else if (
        pc.connectionState === 'disconnected' ||
        pc.connectionState === 'failed'
      ) {
        setCallStatus('ended');
      }
    });

    return pc;
  }, [sendCallSignal]);

  const acceptCall = useCallback(
    async (payload: string) => {
      if (!peerConnection.current) {
        return;
      }
      const pc = peerConnection.current;

      // Received an offer, set remote description and create answer
      const offer = JSON.parse(payload);
      await pc.setRemoteDescription(new RTCSessionDescription(offer));

      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);

      sendCallSignal('ANSWER', JSON.stringify(answer));
    },
    [sendCallSignal],
  );

  const handleIncomingSignal = useCallback(
    async (type: CallSignalType, payload: string) => {
      if (!peerConnection.current) {
        return;
      }
      const pc = peerConnection.current;
      try {
        if (type === 'OFFER') {
          acceptCall(payload);
        } else if (type === 'ANSWER') {
          // Received an answer, set remote description
          const answer = JSON.parse(payload);
          await pc.setRemoteDescription(new RTCSessionDescription(answer));
        } else if (type === 'ICE_CANDIDATE') {
          // Received an ICE candidate
          const candidate = JSON.parse(payload);
          const iceCandidate = new RTCIceCandidate(candidate);

          await pc.addIceCandidate(iceCandidate).catch(error => {
            console.log('iceCandidateError', error);
          });
        }
      } catch (error) {
        console.error('Error handling signal:', error);
      }
    },
    [peerConnection, acceptCall],
  );

  useCallSignalReceived(
    chatID,
    useCallback(
      data => {
        const {type, payload} = data;
        handleIncomingSignal(type, payload);
      },
      [handleIncomingSignal],
    ),
  );

  return {
    acceptCall,
    handleIncomingSignal,
    initializeWebRTC,
    startCall,
    localStream,
    remoteStream,
    endCall,
    callStatus,
    cleanupCall,
  };
};
