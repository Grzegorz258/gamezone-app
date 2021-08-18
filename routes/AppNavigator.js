import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const {Navigator, Screen} = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen
          name="Home"
          component={HomeStack}
          options={{ title: 'GameZone' }}
        />
        <Screen
          name="About"
          component={AboutStack}
          options={{ title: 'About GameZone' }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
