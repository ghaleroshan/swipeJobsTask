import React from 'react';
import styled from 'styled-components';
import { asRem } from '../helper';

const Nav = styled.nav`
  display: flex;
  background: #000;
  justify-content: space-between;
  align-items: center;
  padding: ${asRem(15)};
`;

export const ImgStyle = styled.img`
  display: flex;
  max-width: ${asRem(180)};
  max-height: ${asRem(30)};
  width: auto;
  height: 100%;
  text-align: center;
`;

const User = styled.h4`
  color: #fff;
  margin: 0;
  font-size: ${asRem(18)};
  font-weight: normal;
`;

const Navbar = ({ user }) => {
  const fullName = `${user.firstName} ${user.lastName}`;
  return (
    <Nav>
      <ImgStyle src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt='logo' />
      <User> {fullName}</User>
    </Nav>
  );
};

export default Navbar;
