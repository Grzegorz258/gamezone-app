import React from 'react';
import { View, Text, Button } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

const ReviewDetails = ({ navigation, route }) => {

  const { title, body, rating } = route.params;

  return (
    <View style={GlobalStyles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>Rating: {rating}</Text>
    </View>
  );
};

export default ReviewDetails;
