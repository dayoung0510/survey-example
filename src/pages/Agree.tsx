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
          ?????? ?????? ?????????????? ??? ?????? ?????????
        </Title>
        <Paragraph>
          <Line>1. ??????????????? ?????????????? ?????? ??? ??????</Line>
        </Paragraph>
        <Paragraph>
          <Line>
            ???. ?????? : ?????? ????????? ????????? ???????????? ????????? ?????? ??? ????????????
            ????????????????????? ?????? ?????? ??????
          </Line>
          <Line>??????????????????</Line>
        </Paragraph>

        <Line>
          ??? ?????? ??????
          <div style={{ marginLeft: '1rem' }}>
            <FormControl>
              <RadioGroup row name="agree1">
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label="???"
                  onChange={() => setAgree1(true)}
                />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="?????????"
                  onChange={() => setAgree1(false)}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Line>
      </Box>

      <Line style={{ justifyContent: 'center' }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>2,000??? ??????</Typography>
          <AntSwitch
            inputProps={{ 'aria-label': 'ant design' }}
            onChange={(e) => setOver2000(e.target.checked)}
          />
          <Typography>2,000??? ??????</Typography>
        </Stack>
      </Line>

      {!over2000 && (
        <Box>
          <Line style={{ color: 'red', justifyContent: 'center' }}>
            *????????? 2,000??? ???????????? ???????????? ??? ?????? ??????*
          </Line>
          <Title fw={600} sz={1.4} mgB={1.5} center>
            ???????????? ???3??? ?????? ?????? ?????????
          </Title>

          <Line style={{ marginTop: '2rem' }}>1. ??????????????? ???????????? ???</Line>
          <Line> ?????? ?????? ?????? ???????????? ?????? ?????? ??? ?????? ?????? ??????</Line>
          <Line>????????? ?????????</Line>

          <Line>
            ??? ?????? ??????
            <div style={{ marginLeft: '1rem' }}>
              <FormControl>
                <RadioGroup row name="agree2">
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="???"
                    onChange={() => setAgree2(true)}
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="?????????"
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
          ????????????
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default Agree;
