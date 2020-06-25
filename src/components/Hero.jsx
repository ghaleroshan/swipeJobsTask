import React from 'react';
import styled from 'styled-components';
import { CONTAINER_WIDTH } from '../constant/theme';

const ImgStyle = styled.img`
  max-width: ${CONTAINER_WIDTH.sm};
  width: 100%;
`;

const Hero = () => {
  return (
    <>
      <ImgStyle src='../../img/hero1.jpg' alt='Hero' />
    </>
  );
};

export default Hero;
