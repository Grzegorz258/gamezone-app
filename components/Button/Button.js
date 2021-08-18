import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const Button = ({ text, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#D0E3E5',
    shadowOffset: { width: 1, height: 1 },
    elevation: 10,
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default Button;
