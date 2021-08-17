import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

const AppNavigator =()=> {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{ title: 'GameZone' }}
        />
        <Drawer.Screen
          name="About"
          component={AboutStack}
          options={{ title: 'About GameZone' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator
