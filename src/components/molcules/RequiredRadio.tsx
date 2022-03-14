import React from 'react';
import styled from 'styled-components';
import { DataType } from 'datas';

const Label = styled.label`
  display: block;
  position: relative;
  margin-right: 1.5rem;
  padding-left: 1.5rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Radio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked {
    span {
      background-color: #4c45d1;
      color: white;
      border-color: #4c45d1;
    }
  }
`;

const CheckMark = styled.span`
  position: absolute;
  top: 0.45rem;
  left: 0;
  border-radius: 50%;
  font-size: 0.6em;
  width: 1.2rem;
  line-height: 1.1rem;
  border: 1px solid #2c2c2c;
  display: inline-block;
  text-align: center;
  font-weight: 700;
`;

const Text = styled.span``;

const Container = styled.div``;

const AnswersContainer = styled.div<{ flex?: boolean }>`
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  margin: 0.5rem;
  margin-bottom: 3rem;
  line-height: 2;
  flex-wrap: wrap;
`;

type Props = {
  datas: DataType;
};

const RequiredRadio: React.FC<Props> = ({ datas }) => {
  return (
    <Container>
      <div>
        {datas.idx}. {datas.title}
      </div>
      <AnswersContainer flex={datas.flex}>
        {datas.options?.map((option) => (
          <Label key={option.value}>
            <Radio type="radio" name={datas.name} value={option.value} />
            <CheckMark>{option.value}</CheckMark>
            <Text>{option.text}</Text>
          </Label>
        ))}
      </AnswersContainer>
    </Container>
  );
};

export default RequiredRadio;
