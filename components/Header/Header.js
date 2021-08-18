import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/img/heart_logo.png')}
        style={{ height: 26, width: 26, marginHorizontal: 10 }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>GameZone</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
        alignItems: 'center',
    height: 60,
    // height: '100%',
    // width: Dimensions.get('window').width,
  },
});

export default Header;
