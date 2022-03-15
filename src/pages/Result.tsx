import React from 'react';
import { useAppContext } from 'App/context';
import Title from 'components/atoms/Title';

const Result: React.FC = () => {
  const { state } = useAppContext();
  console.log(state.form.length);

  return (
    <div>
      <Title center fw={600} sz={1.5}>
        응답결과
      </Title>
      {state.form.length !== 0 &&
        Object.entries(state.form).map(([key, value]) => {
          return (
            <div key={key} style={{ marginTop: '1rem' }}>
              {key} 번 ▶ {value}
            </div>
          );
        })}
    </div>
  );
};

export default Result;
