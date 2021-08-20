import React, { useState } from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Container } from '../styles/GlobalStyles';
import Card from '../components/Card/Card';
import Modal from '../components/Modal/Modal';
import { OpenModalIcon } from './Home.styles';

const Home = ({ navigation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((prevState) => [review, ...prevState]);
    setIsModalOpen(false);
  };

  return (
    <Container>
      {isModalOpen ? (
        <Modal setIsModalOpen={setIsModalOpen} addReview={addReview} />
      ) : null}

      <OpenModalIcon
        name="add"
        size={24}
        onPress={() => setIsModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', item)}
          >
            <Card>
              <Text>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

export default Home;
