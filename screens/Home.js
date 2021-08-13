import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

const Home = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18
    }
});

export default Home;
