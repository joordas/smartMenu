import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './screens/onboarding';
import Signup from './screens/signup';

const Stack = createNativeStackNavigator();

const defaultOptions = {
  headerShown: false,
};

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={defaultOptions}
        name="Onboarding"
        component={Onboarding}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={defaultOptions}></Stack.Screen>
    </Stack.Navigator>
  );
}
