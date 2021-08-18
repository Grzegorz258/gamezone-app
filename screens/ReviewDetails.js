import React from 'react';
import { View, Text, Button } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import Card from '../components/Card/Card';

const ReviewDetails = ({ navigation, route }) => {
  const { title, body, rating } = route.params;

  return (
    <View style={GlobalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <Text>Rating: {rating}</Text>
      </Card>
    </View>
  );
};

export default ReviewDetails;
