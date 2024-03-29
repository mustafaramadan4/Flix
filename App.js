import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import EmailScreen from './screens/signup-form/EmailScreen';
import NameScreen from './screens/signup-form/NameScreen';
import PasswordScreen from './screens/signup-form/PasswordScreen';
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';
import HomeFeedScreen from './screens/HomeFeedScreen';
import TabNavigator from './navigation/TabNavigator';

export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Email" component={EmailScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Name" component={NameScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Password" component={PasswordScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Signin" component={SigninScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HomeFeed" component={HomeFeedScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TabNav" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

