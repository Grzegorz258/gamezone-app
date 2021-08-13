import React from 'react';
import { View, Text, Button } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

const ReviewDetails = ({ navigation }) => {
  const pressHandler = () => navigation.goBack();

  return (
    <View style={GlobalStyles.container}>
      <Text>ReviewDetails Screen</Text>
      <Button title="Go back" onPress={pressHandler} />
    </View>
  );
};

export default ReviewDetails;
