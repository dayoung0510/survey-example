import React from 'react';
import { TableQuestionType } from 'types';
import styled from 'styled-components';
import Td from 'components/atoms/Td';
import { useAppContext } from 'App/context';

type Props = {
  rowSpan: number;
  sectionTitle: string;
  datas: TableQuestionType[];
};

export const ContentTd = styled(Td)`
  padding: 0.5rem 0;
  line-height: 1.45;
`;
export const Label = styled.label`
  font-size: 0.85rem;
  letter-spacing: -1px;
  color: #424242;
  margin: 0 !important;
`;
export const RowSpan = styled(Td)`
  background-color: #ececec;
  font-size: 0.9rem;
  width: 10%;
  line-height: 1.2;
`;

const FivePointsTable: React.FC<Props> = ({ datas, rowSpan, sectionTitle }) => {
  const { dispatch } = useAppContext();
  const handleChange = (name: string, value: string) => {
    dispatch({ type: 'CHECK', name: name, value: value });
  };

  return (
    <>
      {datas.map((data) => (
        <tr key={data.idx}>
          {data.idx === '1' && (
            <RowSpan rowSpan={rowSpan}>{sectionTitle}</RowSpan>
          )}
          <ContentTd>{data.title}</ContentTd>
          <Td>
            <Label>
              <input
                type="radio"
                value={1}
                name={data.name}
                required
                onChange={(e) => handleChange(data.name, e.target.value)}
              />
              <span>1</span>
            </Label>
          </Td>
          <Td>
            <Label>
              <input
                type="radio"
                value={2}
                name={data.name}
                onChange={(e) => handleChange(data.name, e.target.value)}
              />
              <span>2</span>
            </Label>
          </Td>
          <Td>
            <Label>
              <input
                type="radio"
                value={3}
                name={data.name}
                onChange={(e) => handleChange(data.name, e.target.value)}
              />
              <span>3</span>
            </Label>
          </Td>
          <Td>
            <Label>
              <input
                type="radio"
                value={4}
                name={data.name}
                onChange={(e) => handleChange(data.name, e.target.value)}
              />
              <span>4</span>
            </Label>
          </Td>
          <Td>
            <Label>
              <input
                type="radio"
                value={5}
                name={data.name}
                onChange={(e) => handleChange(data.name, e.target.value)}
              />
              <span>5</span>
            </Label>
          </Td>
        </tr>
      ))}
    </>
  );
};

export default FivePointsTable;
