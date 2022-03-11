import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';
import Box from 'components/atoms/Box';
import IconText from 'components/atoms/IconText';
import Line from 'components/atoms/Line';
import Indent from 'components/atoms/Indent';
import Button from 'components/atoms/Button';

const Intro1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Title fw={600} sz={1.4} mgB={1.5} center>
        학교 현장에서의 에듀테크 활용 경험 및 수요 조사
      </Title>

      <Paragraph>
        한국교육학술정보원(KERIS)에서는 학교 현장에서 양질의 에듀테크를 폭넓게
        활용할 수 있도록 지원함으로써 디지털기반 교수·학습 혁신에 기여하고자
        노력하고 있습니다. 특히, 2021년에는 권역별 에듀테크 소프트랩을 구축하여
        현장 맞춤형 에듀테크 기술 검증·개발과 에듀테크 활용 활성화 등을 지원하고
        있습니다.
      </Paragraph>
      <Paragraph>
        이에, 학교 현장에 계신 선생님들의 ①에듀테크 활용 경험과 ②실수요가 있는
        에듀테크에 대한 아이디어를 청취하여, 에듀테크 소프트랩에서의 실증 대상을
        발굴하고 공교육 에듀테크가 나아가야할 방향을 모색하고자 하오니
        바쁘시더라도 많은 참여 부탁드립니다.
      </Paragraph>

      <Box>
        <Line>
          1. 조사목적: 학교 현장에 필요한 에듀테크 실수요 파악 및 에듀테크
          소프트랩에서의 실증 대상 발굴
        </Line>
        <Line>2. 조사내용 </Line>
        <Indent>- 에듀테크에 대한 현장 교원의 이용 현황</Indent>
        <Indent>- 에듀테크에 대한 현장 교원의 수요 조사 등</Indent>
        <Line> 3. 조사기간 : 2022. 3. 8.(화) ~ 4. 4.(월) </Line>
        <Line>4. 조사방법 : 온라인 링크를 통해 접속 및 설문 응답</Line>
        <Line>
          5. 조사대상 : 공교육 에듀테크에 관심 있는 초중고 현장 교사 및 관리자
        </Line>
        <Line> 6. 문의 : 한국교육학술정보원 이애숙 연구원(053-714-0671)</Line>
      </Box>

      <Paragraph>
        <IconText type="SNOW" text="설문 참여 시간 : 약 10분 내외 소요" />
        <IconText
          type="SNOW"
          text="설문에 참여해주신 분들께 선착순으로 소정의 모바일 상품권을 제공해드릴
          예정입니다(입력해주신 연락처로 4월 중순 발송 예정)."
        />
        <IconText
          type="SNOW"
          text="입력해주신 개인정보는 설문조사 분석용(성명, 연락처 등 개인 식별
            가능한 정보는 제외)으로 활용되고, 소기의 목적이 달성되면 즉시 파기될
            예정입니다. 다만, 향후 에듀테크 실증 참여의사가 있는 선생님들의
            성명, 연락처 등은 최대 1년 동안 보관될 수 있습니다."
        />
      </Paragraph>

      <Button text="다음" onClick={() => navigate('/intro2')} />
    </div>
  );
};

export default Intro1;
