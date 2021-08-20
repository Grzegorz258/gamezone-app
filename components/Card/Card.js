import React from 'react';
import { View } from 'react-native';
import { StyledView, styles, Wrapper } from './Card.styles';

const Card = ({ children }) => {
  return (
    <Wrapper>
      <StyledView>{children}</StyledView>
    </Wrapper>
  );
};



export default Card;
