import React from 'react';
import { DataType } from 'datas';
import { Container, Input } from 'components/molcules/RequiredText';

type Props = {
  datas: DataType;
};

const OptionalText: React.FC<Props> = ({ datas }) => {
  return (
    <Container>
      <div>
        {datas.idx}. {datas.title}
      </div>
      <Input name={datas.name} />
    </Container>
  );
};

export default OptionalText;
