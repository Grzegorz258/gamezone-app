import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/AppNavigator';


const getFonts = () =>
  Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
  });

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return (
    <>
      {fontsLoaded ? (
        <Navigator />
      ) : (
        <AppLoading
          startAsync={getFonts}
          onFinish={() => setFontsLoaded(true)}
          onError={console.warn}
        />
      )}
    </>
  );
};

export default App;
