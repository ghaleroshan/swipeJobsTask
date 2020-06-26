import React from 'react';
import styled from 'styled-components';
import { asRem } from '../helper';
import { CONTAINER_WIDTH } from '../constant/theme';

const Section = styled.div`
  display: flex;
  max-width: ${CONTAINER_WIDTH.sm};
  width: 100%;
  background: #000;
  height: ${asRem(80)};
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const ImgStyle = styled.img`
  display: flex;
  max-width: ${asRem(200)};
  max-height: ${asRem(40)};
  width: 100%;
  height: 100%;
  text-align: center;
`;

const User = styled.h4`
  color: #fff;
  margin-left: ${asRem(200)};
`;

const Navbar = () => {
  return (
    <>
      <Section>
        <ImgStyle
          src={`${process.env.PUBLIC_URL}/assets/logo.png`}
          alt='logo'
        />
        <User> Jim Rose</User>
      </Section>
    </>
  );
};

export default Navbar;
