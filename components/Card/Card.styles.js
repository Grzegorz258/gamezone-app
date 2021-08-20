import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const StyledView = styled.View`
  margin: 10px 10px;
`;

export const Wrapper = styled.View`
  margin: 5px 5px;
  background-color: #fff;
  border-radius: 5px;
  elevation: 3;
  shadow-offset: 1px 1px;
  shadow-color: #333;
  shadow-opacity: 0.3;
  shadow-radius: 2px;
`;

export const styles = StyleSheet.create({
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
});
