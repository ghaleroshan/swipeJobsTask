import React from 'react';
import styled from 'styled-components';

import { asRem } from '../../helper';
import { font } from '../theme';

const ButtonStyle = styled.button`
  width: ${asRem(200)};
  font-family: ${font.fontFamily};
  font-size: ${asRem(18)};
  height: ${asRem(50)};
  border-radius: ${asRem(3)};
  box-sizing: border-box;
  border: 1px solid #000;
  background: ${(props) => (props.primary ? 'black' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  padding: ${asRem(8)};

  :hover {
  }
`;
const Button = ({ children, ...rest }) => {
  return (
    <div>
      <ButtonStyle type='button' {...rest}>
        {children}
      </ButtonStyle>
    </div>
  );
};

export default Button;
