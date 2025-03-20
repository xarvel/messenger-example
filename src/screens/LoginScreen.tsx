import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../App.tsx';
import {palette} from '../palette';

export const LoginScreen: FC<
  NativeStackScreenProps<StackParamList, 'Login'>
> = ({navigation}) => {
  const loginAs = async (key: string) => {
    await AsyncStorage.setItem('authorization', key);
    navigation.navigate('Messenger', {
      chatID: 'chat1',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Messenger</Text>
        <Text style={styles.subtitle}>Choose your account</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => loginAs('user1')}>
            <Text style={styles.buttonText}>Bob</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => loginAs('user2')}>
            <Text style={styles.buttonText}>Alice</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: palette.textBlack,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: palette.textSecondary,
    marginBottom: 32,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
    gap: 16,
  },
  button: {
    backgroundColor: palette.blue,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: palette.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
