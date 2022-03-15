import React from 'react';
import Title from 'components/atoms/Title';
import { ch3_questions } from 'datas';
import TextArea from 'components/molcules/TextArea';
import Radio from 'components/molcules/Radio';
import Checkbox from 'components/molcules/Checkbox';

const Ch3: React.FC = () => {
  return (
    <div style={{ marginTop: '3rem' }}>
      <Title fw={600} sz={1.4} mgB={1.5}>
        3. 에듀테크 개발 아이디어
      </Title>

      {ch3_questions.map((q) => {
        switch (q.type) {
          case 'TextArea': {
            return (
              <TextArea key={q.idx} datas={q.datas} isRequired={q.isRequired} />
            );
          }
          case 'Radio': {
            return (
              <Radio key={q.idx} datas={q.datas} isRequired={q.isRequired} />
            );
          }
          case 'Checkbox': {
            return (
              <Checkbox key={q.idx} datas={q.datas} isRequired={q.isRequired} />
            );
          }
          default:
            return <></>;
        }
      })}
    </div>
  );
};

export default Ch3;
