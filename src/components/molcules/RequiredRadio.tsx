import React from 'react';
import styled from 'styled-components';
import { DataType } from 'datas';
import { useAppContext } from 'App/context';

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

const CheckMark = styled.span`
  position: absolute;
  top: 0.35rem;
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

const Radio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + ${CheckMark} {
    background-color: #4c45d1;
    color: white;
    border-color: #4c45d1;
  }

  &:checked + ${Text} {
    color: #4c45d1;
    font-weight: 800;
  }
`;

const Container = styled.div`
  margin-bottom: 3rem;
`;

const AnswersContainer = styled.div<{ flex?: boolean }>`
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  margin: 0.5rem;
  line-height: 2;
  flex-wrap: wrap;
`;

type Props = {
  datas: DataType;
};

const RequiredRadio: React.FC<Props> = ({ datas }) => {
  const { state, dispatch } = useAppContext();

  const handleChange = (name: string, value: number) => {
    dispatch({ type: 'CHECK', name: name, value: value });
  };

  console.log(state);
  return (
    <Container>
      <div>
        {datas.idx}. {datas.title}
      </div>
      <AnswersContainer flex={datas.flex}>
        {datas.options?.map((option) => (
          <Label key={option.value}>
            <Radio
              type="radio"
              name={datas.name}
              value={option.value}
              onChange={() => handleChange(datas.name, option.value)}
            />
            <CheckMark>{option.value}</CheckMark>
            <Text>{option.text}</Text>
          </Label>
        ))}
      </AnswersContainer>
    </Container>
  );
};

export default RequiredRadio;
