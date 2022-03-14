import styled from 'styled-components';
import { lighten, darken } from 'polished';

const Button = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
  padding: 1rem 3rem;
  font-size: 1.2rem;
  border-radius: 0.4rem;
  background: #6a7ba2;
  color: #fff;

  :hover {
    background: ${darken(0.1, '#6a7ba2')};
  }

  :disabled {
    background: ${lighten(0.3, '#6a7ba2')};
  }
`;

export default Button;
