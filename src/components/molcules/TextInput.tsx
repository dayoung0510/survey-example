import React from 'react';
import styled from 'styled-components';
import { DataType } from 'types';
import { useAppContext } from 'App/context';

type Props = {
  datas: DataType;
  isRequired?: boolean;
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

const RequiredText: React.FC<Props> = ({ datas, isRequired = false }) => {
  const { dispatch } = useAppContext();

  const handleChange = (name: string, value: string) => {
    dispatch({ type: 'CHECK', name: name, value: value });
  };

  return (
    <Container>
      <div>
        {datas.idx}. {datas.title}
      </div>
      <Input
        name={datas.name}
        required={isRequired}
        onChange={(e) => handleChange(datas.name, e.target.value)}
      />
    </Container>
  );
};

export default RequiredText;
