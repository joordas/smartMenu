import React from 'react';
import {NativeBaseProvider, extendTheme, ColorMode} from 'native-base';
import colorTheme from './src/theme/colorTheme';
import type {StorageManager} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';

const theme = extendTheme({colors: colorTheme});

export default function App() {
  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        let val = await AsyncStorage.getItem('@my-app-color-mode');
        return val === 'dark' ? 'dark' : 'light';
      } catch (e) {
        console.log(e);
        return 'light';
      }
    },
    set: async (value: ColorMode) => {
      try {
        await AsyncStorage.setItem('@my-app-color-mode', value as string);
      } catch (e) {
        console.log(e);
      }
    },
  };
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
        <Router />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
