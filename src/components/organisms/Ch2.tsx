import React from 'react';
import Title from 'components/atoms/Title';
import Box from 'components/atoms/Box';
import IconText from 'components/atoms/IconText';
import TextInput from 'components/molcules/TextInput';
import Radio from 'components/molcules/Radio';
import TextArea from 'components/molcules/TextArea';
import { ch2_questions } from 'datas';

const Ch2: React.FC = () => {
  return (
    <div>
      <Title fw={600} sz={1.4} mgB={1.5}>
        Ⅱ. 에듀테크 수요 설문조사
      </Title>

      <Title fw={600} sz={1.1} mgB={1}>
        1. 학교 현장에서 에듀테크 활용 경험 여부
      </Title>

      <Box>
        <IconText
          type="SNOW"
          text="에듀테크(Edutech)는 교육(Education)과 기술(Technology)의 합성어로, 인공지능, 빅데이터, 증강ᆞ가상현실, 사물인터넷 등 융합 기술을 접목해 기존과 다른 교육서비스를 제공하여 새로운 교육적 가치를 제공하는데 활용되는 기술입니다. 
   "
        />
        <IconText
          type="NULL"
          text="예) 디지털교과서, 아이스크림, 구글클래스룸, MS팀즈, 클래스팅, 엘리스 등 
      (인공지능, AR/VR, 메타버스, 챗봇, 빅데이터, IoT 관련 기술을 활용한 제품 및 콘텐츠)"
        />
      </Box>

      {ch2_questions.map((q) => {
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
              <TextArea key={q.idx} datas={q.datas} isRequired={q.isRequired} />
            );
          }
          default:
            return <></>;
        }
      })}
    </div>
  );
};

export default Ch2;
