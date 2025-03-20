import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RelayEnvironmentProvider} from 'react-relay';
import {RelayEnvironment} from './transport/RelayEnvironment';
import {LoginScreen} from './screens/LoginScreen';
import {MessengerScreen} from './screens/MessengerScreen';
import {CallScreen} from './screens/CallScreen';
import {CallSignal} from './hooks/useCallSignalReceived.ts';
import {CallButton} from './components/CallButton.tsx';

export type StackParamList = {
  Login: undefined;
  Messenger: {
    chatID: string;
  };
  Call: {
    chatID: string;
    incomingSignal?: CallSignal;
  };
};

const Stack = createNativeStackNavigator<StackParamList>();

const MessengerHeaderRight: React.FC<{navigation: any; route: any}> = ({
  navigation,
  route,
}) => (
  <CallButton
    onPress={() => navigation.navigate('Call', {chatID: route.params.chatID})}
  />
);

const App: React.FC = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Messenger"
            component={MessengerScreen}
            options={({navigation, route}) => ({
              title: 'Messages',
              headerBackTitle: 'Back',
              headerRight: () => (
                <MessengerHeaderRight navigation={navigation} route={route} />
              ),
            })}
          />
          <Stack.Screen
            name="Call"
            component={CallScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RelayEnvironmentProvider>
  );
};

export default App;
