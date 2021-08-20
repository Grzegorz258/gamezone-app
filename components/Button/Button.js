import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Wrapper, StyledText } from './Button.styles';

const Button = ({ text, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <Wrapper>
        <StyledText>{text}</StyledText>
      </Wrapper>
    </TouchableHighlight>
  );
};

export default Button;
