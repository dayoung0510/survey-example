import React from 'react';
import { DataType } from 'types';
import { useAppContext } from 'App/context';
import {
  Container,
  AnswersContainer,
  Text,
  Radio as Checkbox,
  CheckMark,
  Label,
} from 'components/molcules/Radio';

type Props = {
  datas: DataType;
  isRequired?: boolean | undefined;
};

const MyCheckbox: React.FC<Props> = ({
  datas: { idx, name, title, options },
  isRequired = false,
}) => {
  const { dispatch } = useAppContext();

  const handleChange = (name: string, value: number) => {
    dispatch({ type: 'CHECK', name: name, value: value });
  };

  return (
    <Container>
      <div>
        {idx}. {title}
      </div>
      <AnswersContainer>
        {options?.map((option, idx) => (
          <Label key={option.idx}>
            <Checkbox
              type="checkbox"
              name={name}
              value={option.value}
              onChange={() => handleChange(option.idx, option.value)}
              required={isRequired && idx === 0 && true}
            />
            <CheckMark>{idx + 1}</CheckMark>
            <Text>{option.text}</Text>
          </Label>
        ))}
      </AnswersContainer>
    </Container>
  );
};

export default MyCheckbox;
