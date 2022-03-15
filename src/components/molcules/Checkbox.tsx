import React, { useState, useEffect } from 'react';
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

  const [checked, setChecked] = useState(0);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
    value: number,
  ) => {
    dispatch({ type: 'CHECK', name: name, value: value });

    if (event.target.checked) {
      setChecked((prev) => prev + 1);
    } else {
      setChecked((prev) => prev - 1);
    }
  };

  return (
    <Container>
      <div>
        {idx}. {title} -{checked}개 선택함
      </div>
      <AnswersContainer>
        {options?.map((option, index) => (
          <Label key={option.idx}>
            <Checkbox
              type="checkbox"
              name={option.idx}
              value={option.value}
              onChange={(event) =>
                handleChange(event, option.idx, option.value)
              }
              required={isRequired && checked === 0 && true}
            />
            <CheckMark>{index + 1}</CheckMark>
            <Text>{option.text}</Text>
          </Label>
        ))}
      </AnswersContainer>
    </Container>
  );
};

export default MyCheckbox;
