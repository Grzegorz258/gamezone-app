import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import Card from '../components/Card/Card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

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
    <View style={GlobalStyles.container}>
      <Modal visible={isModalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setIsModalOpen(false)}
              style={{ ...styles.openModal, ...styles.closeModal }}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setIsModalOpen(true)}
        style={styles.openModal}
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
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  openModal: {
    alignSelf: 'center',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DAD7D7',
    borderRadius: 10,
  },
  closeModal: {
    marginTop: 20,
    marginBottom: 0,
  },
});

export default Home;
