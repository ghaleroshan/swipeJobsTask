import React from 'react';
import styled from 'styled-components';
import { asRem } from '../helper';
import { logo } from '../constant/icon-base64/';

const Section = styled.div`
  display: flex;
  max-width: ${asRem(560)};
  width: 100%;
  background: #000;
  height: ${asRem(80)};
  justify-content: space-around;
  align-items: center;
`;

export const ImgStyle = styled.img`
  max-width: ${asRem(200)};
  max-height: ${asRem(50)};
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
        <ImgStyle src={`data:image/svg+xml;base64, ${logo}`} />
        <User> Jim Rose</User>
      </Section>
    </>
  );
};

export default Navbar;
