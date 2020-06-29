import styled from 'styled-components';

import { asRem } from '../../helper';

const Button = styled.button`
  width: ${(props) => (props.isFullWidth ? '100%' : 'auto')};
  font-size: ${asRem(18)};
  font-weight: normal;
  height: ${asRem(50)};
  border-radius: ${asRem(3)};
  box-sizing: border-box;
  border: ${(props) => (props.primary ? 'black' : '1px solid #999')};
  background: ${(props) => (props.primary ? 'black' : 'transparent')};
  color: ${(props) => (props.primary ? 'white' : '#aaa')};
  padding: ${asRem(8)};
`;

export default Button;
