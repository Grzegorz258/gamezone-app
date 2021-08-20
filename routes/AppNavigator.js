import React from 'react';
import { Image, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import Header from '../components/Header/Header';

const { Navigator, Screen } = createDrawerNavigator();

const headerOptions = {
  headerBackground: () => (
    <Image
      source={require('../assets/img/game_bg.png')}
      style={{ height: '100%' }}
    />
  ),
  headerTitleAlign: 'center',
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="HomeInDrawer">
        <Screen
          name="HomeInDrawer"
          component={HomeStack}
          options={{
            title: 'GameZone',
            headerTitle: () => <Header title="Gamezone" />,
            ...headerOptions,
          }}
        />
        <Screen
          name="AboutInDrawer"
          component={AboutStack}
          options={{
            title: 'About GameZone',
            headerTitle: () => <Header title="About GameZone" />,
            ...headerOptions,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
