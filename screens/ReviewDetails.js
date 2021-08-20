import React from 'react';
import { Text, Image } from 'react-native';
import { Container } from '../styles/GlobalStyles';
import Card from '../components/Card/Card';
import { images } from '../assets/data/ratingImages';
import { StyledRating } from './ReviewDetails.styles';

const ReviewDetails = ({ route }) => {
  const { title, body, rating } = route.params;
  return (
    <Container>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <StyledRating>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </StyledRating>
      </Card>
    </Container>
  );
};



export default ReviewDetails;
