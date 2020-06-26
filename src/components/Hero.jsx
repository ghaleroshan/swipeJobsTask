import React from 'react';
import styled from 'styled-components';
import { asRem } from '../helper';

const HeroImg = styled.img`
  max-width: ${asRem(520)};
  width: 100%;
  max-height: ${asRem(300)};
  height: 100%;
  text-align: center;
  border-radius: ${asRem(5)};
`;

const Hero = () => {
  return (
    <>
      <HeroImg
        src={`${process.env.PUBLIC_URL}/assets/img/hero.png`}
        alt='hero'
      />
    </>
  );
};

export default Hero;
