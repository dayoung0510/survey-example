import React, { useState, useEffect } from 'react';
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
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const Agree: React.FC = () => {
  const navigate = useNavigate();

  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [over2000, setOver2000] = useState(false);

  useEffect(() => {
    if (over2000) {
      setAgree2(true);
    } else {
      setAgree2(false);
    }
  }, [over2000]);

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
      </Box>

      <Line style={{ justifyContent: 'center' }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>2,000명 이하</Typography>
          <AntSwitch
            inputProps={{ 'aria-label': 'ant design' }}
            onChange={(e) => setOver2000(e.target.checked)}
          />
          <Typography>2,000명 초과</Typography>
        </Stack>
      </Line>

      {!over2000 && (
        <Box>
          <Line style={{ color: 'red', justifyContent: 'center' }}>
            *참여자 2,000명 기준으로 보이거나 안 보일 부분*
          </Line>
          <Title fw={600} sz={1.4} mgB={1.5} center>
            개인정보 제3자 제공 추가 동의서
          </Title>

          <Line style={{ marginTop: '2rem' }}>1. 개인정보를 제공받는 자</Line>
          <Line> 경품 제공 관련 위탁업무 계약 체결 시 경품 제공 업체</Line>
          <Line>어쩌구 저쩌구</Line>

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
      )}

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
