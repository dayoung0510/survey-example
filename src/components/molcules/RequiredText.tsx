import React from 'react';
import styled from 'styled-components';
import { DataType } from 'datas';

type Props = {
  datas: DataType;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #acacac;
  outline: 0;
  padding: 0.5rem;
  margin-left: 0.5rem;
`;

const RequiredText: React.FC<Props> = ({ datas }) => {
  return (
    <Container>
      <div>
        {datas.idx}. {datas.title}
      </div>
      <Input required name={datas.name} />
    </Container>
  );
};

export default RequiredText;
