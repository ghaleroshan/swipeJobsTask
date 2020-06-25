import React from 'react';
import styled from 'styled-components';

import { asRem } from '../../helper';

const ButtonStyle = styled.button`
  max-width: ${asRem(150)};
  width: 100%;
  border-radius: ${asRem(3)};
  box-sizing: border-box;
  border: 1px solid #000;
  background: ${(props) => (props.primary ? 'black' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  padding: ${asRem(8)};
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
