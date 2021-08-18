import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import Card from '../components/Card/Card';
import { images } from '../assets/data/ratingImages';

const ReviewDetails = ({ navigation, route }) => {
  const { title, body, rating } = route.params;
  return (
    <View style={GlobalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
});

export default ReviewDetails;
