import React from 'react';
import Title from 'components/atoms/Title';
import Table from 'components/atoms/Table';
import Th from 'components/atoms/Th';
import FlexibleTable from 'components/molcules/FlexibleTable';
import { ch2_2_questions } from 'datas';

const Ch2_2: React.FC = () => {
  return (
    <div>
      <Title cr="blue">이것은 '아니오' 골랐을 때만 보임</Title>
      <div>
        <Title>
          1-2-1. 학교 현장에서 활용한 경험이 있는 에듀테크 제품(또는 콘텐츠)에는
          어떤 것이 있는지 기술해 주세요.
        </Title>
        <Table>
          <thead>
            <tr>
              <Th width={50} colSpan={2}>
                영역
              </Th>
              <Th width={20}>에듀테크 활용 경험</Th>
              <Th width={30} colSpan={3}>
                에듀테크 활용 경험
              </Th>
            </tr>
          </thead>
          <tbody>
            <FlexibleTable
              rowSpan={ch2_2_questions.rowspan}
              sectionTitle={ch2_2_questions.sectionTitle}
              datas={ch2_2_questions.questions}
            />
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Ch2_2;
