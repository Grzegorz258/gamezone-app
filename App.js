import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Home from './screens/Home';
import AppLoading from 'expo-app-loading';

const getFonts = () =>
  Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
  });

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return <>{fontsLoaded ? <Home /> : <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={console.warn}/>}</>;
};

export default App;
