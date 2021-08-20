import React from 'react';
import { Wrapper,StyledImage, Title } from './Header.styles';

const Header = ({ title }) => {
  return (
    <Wrapper>
      <StyledImage
        source={require('../../assets/img/heart_logo.png')}
      />
      <Title>{title}</Title>
    </Wrapper>
  );
};


export default Header;
