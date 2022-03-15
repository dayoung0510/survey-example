import React from 'react';
import Title from 'components/atoms/Title';
import TextInput from 'components/molcules/TextInput';
import Radio from 'components/molcules/Radio';
import TextArea from 'components/molcules/TextArea';
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
            case 'TextInput': {
              return (
                <TextInput
                  key={q.idx}
                  datas={q.datas}
                  isRequired={q.isRequired}
                />
              );
            }
            case 'Radio': {
              return (
                <Radio key={q.idx} datas={q.datas} isRequired={q.isRequired} />
              );
            }
            case 'TextArea': {
              return (
                <TextArea
                  key={q.idx}
                  datas={q.datas}
                  isRequired={q.isRequired}
                />
              );
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
