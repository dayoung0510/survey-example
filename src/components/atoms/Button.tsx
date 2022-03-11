import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

type Props = {
  submit?: boolean;
  text: string;
  onClick: () => void;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 2rem 0;
`;

const ButtonComponent = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
  padding: 1rem 3rem;
  font-size: 1.2rem;
  border-radius: 0.4rem;
  background: #6a7ba2;
  color: #fff;

  :hover {
    background: ${lighten(0.15, '#6a7ba2')};
  }
`;

const Button: React.FC<Props> = ({ submit, text, onClick }) => {
  return (
    <Container>
      <ButtonComponent type={submit ? 'submit' : 'button'} onClick={onClick}>
        {text}
      </ButtonComponent>
    </Container>
  );
};

export default Button;
