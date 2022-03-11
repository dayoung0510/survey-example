import styled from 'styled-components';
import Snow from '@mui/icons-material/AcUnit';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type IconType = 'SNOW' | 'ARROW_R' | 'ARROW_L';

type Props = {
  type: IconType;
  text?: string;
};

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const IconContainer = styled.div`
  width: 1.2rem;
  svg {
    margin-top: 0.3rem;
    font-size: 1rem;
  }
`;

const TextContainer = styled.div`
  width: calc(100% - 1.2rem);
`;

const IconText: React.FC<Props> = ({ type, text }) => {
  const selectIcon = (type: IconType) => {
    switch (type) {
      case 'SNOW': {
        return <Snow />;
      }
      case 'ARROW_R': {
        return <ArrowForwardIcon />;
      }
      case 'ARROW_L': {
        return <ArrowBackIcon />;
      }
      default:
        return <Snow />;
    }
  };

  return (
    <Container>
      <IconContainer>{selectIcon(type)}</IconContainer>
      <TextContainer>{text}</TextContainer>
    </Container>
  );
};

export default IconText;
