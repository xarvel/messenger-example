import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {palette} from '../palette.ts';

type CallButtonProps = {
  onPress: () => void;
};

export const CallButton: FC<CallButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.callButton}>
      <Text style={styles.callButtonText}>Call</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  callButton: {
    padding: 8,
    backgroundColor: palette.blue,
    borderRadius: 4,
  },
  callButtonText: {
    color: palette.white,
    fontWeight: 'bold',
  },
});
