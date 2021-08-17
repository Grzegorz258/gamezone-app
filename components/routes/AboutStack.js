import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../../screens/About';

const { Navigator, Screen } = createStackNavigator();

const AboutStack = () => (
  <Navigator
    headerShown="false"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen
      name="About"
      component={About}
    />
  </Navigator>
);

export default AboutStack;
