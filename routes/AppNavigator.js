import React from 'react';
import { Image, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const { Navigator, Screen } = createDrawerNavigator();

const Header = ({ title }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={require('../assets/img/heart_logo.png')}
        style={{ height: 26, width: 26, marginHorizontal: 10 }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}> {title}</Text>
    </View>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen
          name="Home"
          component={HomeStack}
          options={{
            title: 'GameZone',
            headerTitle: () => <Header title="GameZone" />,
            headerBackground: () => (
              <Image
                source={require('../assets/img/game_bg.png')}
                style={{ height: '100%' }}
              />
            ),
            headerTitleAlign: 'center',
          }}
        />
        <Screen
          name="About"
          component={AboutStack}
          options={{
            title: 'About GameZone',
            headerTitle: () => <Header title="About GameZone" />,
            headerBackground: () => (
              <Image
                source={require('../assets/img/game_bg.png')}
                style={{ height: '100%' }}
              />
            ),
            headerTitleAlign: 'center',
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
