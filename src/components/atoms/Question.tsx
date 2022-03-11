import React from 'react';
import styled from 'styled-components';

type Props = {
  id: number;
  txt: string;
  add: boolean;
};

const Add = styled.div``;

const Question: React.FC<Props> = ({ id, txt, add }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        {id}. {txt}
      </div>
      <Add>{add && add}</Add>
    </div>
  );
};

export default Question;
