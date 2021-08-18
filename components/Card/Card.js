import React from 'react';
import { StyleSheet, View } from 'react-native';
const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardContent: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default Card;
