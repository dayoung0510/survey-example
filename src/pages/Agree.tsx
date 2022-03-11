import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';
import Box from 'components/atoms/Box';
import Line from 'components/atoms/Line';
import Button from 'components/atoms/Button';
import ButtonContainer from 'components/atoms/ButtonContainer';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const Agree: React.FC = () => {
  const navigate = useNavigate();

  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);

  return (
    <div>
      <Box>
        <Title fw={600} sz={1.4} mgB={1.5} center>
          개인 정보 수집·이용 및 활용 동의서
        </Title>
        <Paragraph>
          <Line>1. 개인정보의 수집·이용 목적 및 항목</Line>
        </Paragraph>
        <Paragraph>
          <Line>
            가. 목적 : 학교 현장에 필요한 에듀테크 실수요 파악 및 에듀테크
            소프트랩에서의 실증 대상 발굴
          </Line>
          <Line>어쩌구저쩌구</Line>
        </Paragraph>

        <Line>
          첫 번째 동의
          <div style={{ marginLeft: '1rem' }}>
            <FormControl>
              <RadioGroup row name="agree1">
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label="네"
                  onChange={() => setAgree1(true)}
                />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="아니오"
                  onChange={() => setAgree1(false)}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Line>

        <Line>
          두 번째 동의
          <div style={{ marginLeft: '1rem' }}>
            <FormControl>
              <RadioGroup row name="agree2">
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label="네"
                  onChange={() => setAgree2(true)}
                />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="아니오"
                  onChange={() => setAgree2(false)}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Line>
      </Box>

      <ButtonContainer>
        <Button
          onClick={() => navigate('/survey')}
          disabled={!agree1 || !agree2}
        >
          설문시작
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default Agree;
