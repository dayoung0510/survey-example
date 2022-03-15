import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from 'App/context';
import Ch1 from 'components/organisms/Ch1';
import Ch2 from 'components/organisms/Ch2';
import Ch2_1 from 'components/organisms/Ch2_1';
import Ch2_2 from 'components/organisms/Ch2_2';
import Ch3 from 'components/organisms/Ch3';
import Button from 'components/atoms/Button';
import Title from 'components/atoms/Title';

const Survey: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'BRANCH', value: 0 });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/result');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Ch1 />
      <Ch2 />
      {state.branch === 1 && <Ch2_1 />}
      {state.branch === 2 && <Ch2_2 />}
      <Ch3 />

      <Title mgB={2} center>
        <Button type="submit">제출</Button>
      </Title>
    </form>
  );
};

export default Survey;
