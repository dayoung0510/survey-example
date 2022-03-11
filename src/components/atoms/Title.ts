import styled from 'styled-components';

type Props = {
  sz?: number;
  fw?: 400 | 600 | 800;
  mgT?: number;
  mgB?: number;
  center?: boolean;
  cr?: string;
};

const Title = styled.div<Props>`
  font-size: ${({ sz }) => (sz ? `${sz}rem` : '1rem')};
  font-weight: ${({ fw }) => (fw ? fw : 400)};
  text-align: ${({ center }) => center && 'center'};
  margin-top: ${({ mgT }) => (mgT ? `${mgT}rem` : '0.5rem')};
  margin-bottom: ${({ mgB }) => (mgB ? `${mgB}rem` : '0.5rem')};
  color: ${({ cr }) => cr && cr};
`;

export default Title;
