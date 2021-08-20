import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="HomeInStack" component={Home} />
    <Screen
      name="Details"
      component={ReviewDetails}
      options={{
        headerShown: true,
      }}
    />
  </Navigator>
);

export default HomeStack;
