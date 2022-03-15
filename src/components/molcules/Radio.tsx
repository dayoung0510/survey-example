import React from 'react';
import styled from 'styled-components';
import { DataType } from 'types';
import { useAppContext } from 'App/context';

export const Label = styled.label`
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

export const CheckMark = styled.span`
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

export const Text = styled.span``;

export const Radio = styled.input`
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

export const Container = styled.div`
  margin-bottom: 3rem;
`;

export const AnswersContainer = styled.div<{ flex?: boolean }>`
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  margin: 0.5rem;
  line-height: 2;
  flex-wrap: wrap;
`;

type Props = {
  datas: DataType;
  isRequired?: boolean | undefined;
};

const MyRadio: React.FC<Props> = ({
  datas: { idx, name, title, options, flex, branch = false },
  isRequired = false,
}) => {
  const { dispatch } = useAppContext();

  const handleChange = (name: string, value: number, branch: boolean) => {
    if (branch) {
      dispatch({ type: 'BRANCH', value: value });
      dispatch({ type: 'CHECK', name: name, value: value });
    } else {
      dispatch({ type: 'CHECK', name: name, value: value });
    }
  };

  return (
    <Container>
      <div>
        {idx}. {title}
      </div>
      <AnswersContainer flex={flex}>
        {options?.map((option, idx) => (
          <Label key={option.idx}>
            <Radio
              type="radio"
              name={name}
              value={option.value}
              onChange={() => handleChange(name, option.value, branch)}
              required={isRequired && idx === 0 && true}
            />
            <CheckMark>{option.value}</CheckMark>
            <Text>{option.text}</Text>
          </Label>
        ))}
      </AnswersContainer>
    </Container>
  );
};

export default MyRadio;
