import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Routes from './src/router';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Or you can return a custom loading component
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
      <Routes />
    </>
  );
}
