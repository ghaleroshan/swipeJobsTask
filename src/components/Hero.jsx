import React from 'react';
import styled from 'styled-components';
import { asRem } from '../helper';

const ImageWrapper = styled.div`
  border-radius: ${asRem(5)} ${asRem(5)} 0 0;
  max-height: ${asRem(200)};
  overflow: hidden;
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Hero = ({ imgUrl }) => (
  <ImageWrapper>
    <HeroImg src={imgUrl} alt='hero' />
  </ImageWrapper>
);

export default Hero;
