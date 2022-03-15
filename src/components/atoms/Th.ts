import styled from 'styled-components';

const Th = styled.th<{ width: number }>`
  width: ${({ width }) => `${width}%`};
  background-color: #ececec;
  line-height: 1.35;
  padding: 0.2rem;
  font-size: 0.8rem;
  border: 1px solid #2c2c2c;
  text-align: center;
  vertical-align: middle;
`;

export default Th;
