import React from 'react';
import styled from 'styled-components';
import { DataType } from 'types';
import { useAppContext } from 'App/context';

type Props = {
  datas: DataType;
  isRequired?: boolean;
};

export const Container = styled.div`
  margin-bottom: 3rem;
`;

export const TextArea = styled.textarea`
  border: 1px solid #acacac;
  outline: 0;
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
`;

const MyTextArea: React.FC<Props> = ({ datas, isRequired }) => {
  const { dispatch } = useAppContext();

  const handleChange = (name: string, value: string) => {
    dispatch({ type: 'CHECK', name: name, value: value });
  };

  return (
    <Container>
      <div>
        {datas.idx}. {datas.title}
      </div>
      <TextArea
        name={datas.name}
        required={isRequired}
        rows={5}
        onChange={(e) => handleChange(datas.name, e.target.value)}
      />
    </Container>
  );
};

export default MyTextArea;
