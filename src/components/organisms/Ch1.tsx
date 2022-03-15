import React from 'react';
import Title from 'components/atoms/Title';
import RequiredText from 'components/molcules/RequiredText';
import OptionalText from 'components/molcules/OptionalText';
import RequiredRadio from 'components/molcules/RequiredRadio';
import { ch1_questions } from 'datas';

const Ch1: React.FC = () => {
  return (
    <div>
      <Title fw={600} sz={1.4} mgB={1.5}>
        Ⅰ. 기초조사
      </Title>
      <div>
        {ch1_questions.map((q) => {
          switch (q.type) {
            case 'RequiredText': {
              return <RequiredText key={q.id} datas={q.datas} />;
            }
            case 'OptionalText': {
              return <OptionalText key={q.id} datas={q.datas} />;
            }
            case 'RequiredRadio': {
              return <RequiredRadio key={q.id} datas={q.datas} />;
            }
            default:
              return <></>;
          }
        })}
      </div>
    </div>
  );
};

export default Ch1;
