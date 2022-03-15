import React, { useState } from 'react';
import { TableQuestionType } from 'types';
import Td from 'components/atoms/Td';
import { useAppContext } from 'App/context';
import { ContentTd, Label, RowSpan } from 'components/molcules/FivePointsTable';
import { Input } from 'components/molcules/TextInput';

type Props = {
  rowSpan: number;
  sectionTitle: string;
  datas: TableQuestionType[];
};

interface State {
  [name: string]: string;
}

const FlexibleTable: React.FC<Props> = ({ rowSpan, sectionTitle, datas }) => {
  const [experienced, setExperienced] = useState<State>({ '': '' });
  const { dispatch } = useAppContext();

  const handleChange = (name: string, value: string) => {
    setExperienced({ ...experienced, [name]: value });
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
            <div>
              <Label>
                <input
                  required
                  type="radio"
                  name={data.name}
                  value={1}
                  onChange={(e) => handleChange(data.name, e.target.value)}
                />
                <span>있음</span>
              </Label>
            </div>
            <div>
              <Label>
                <input
                  type="radio"
                  name={data.name}
                  value={2}
                  onChange={(e) => handleChange(data.name, e.target.value)}
                />
                <span>없음</span>
              </Label>
            </div>
          </Td>
          <Td>
            {experienced[data.name] === '1' ? (
              <>
                <Input
                  type="text"
                  placeholder="입력하세요"
                  name={`${data.name}-text-1`}
                  onChange={(e) =>
                    handleChange(`${data.name}-text-1`, e.target.value)
                  }
                  required
                />
                <Input
                  type="text"
                  placeholder="입력하세요"
                  name={`${data.name}-text-2`}
                  onChange={(e) =>
                    handleChange(`${data.name}-text-2`, e.target.value)
                  }
                />
                <Input
                  type="text"
                  placeholder="입력하세요"
                  name={`${data.name}-text-3`}
                  onChange={(e) =>
                    handleChange(`${data.name}-text-3`, e.target.value)
                  }
                />
              </>
            ) : (
              <>'있음'선택 경우에만 입력가능</>
            )}
          </Td>
        </tr>
      ))}
    </>
  );
};

export default FlexibleTable;
