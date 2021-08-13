import React from 'react';
import { View, Text, Button } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

const Home = ({navigation}) => {
  const pressHandler = () => navigation.navigate('Details');

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>Home Screen</Text>
      <Button title="Go to review details" onPress={pressHandler}/>
    </View>
  );
};

export default Home;
