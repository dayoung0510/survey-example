import React from 'react';
import { ch2_1_questions } from 'datas';
import Title from 'components/atoms/Title';
import Table from 'components/atoms/Table';
import Th from 'components/atoms/Th';
import FivePointsTable from 'components/molcules/FivePointsTable';

const Ch2_1: React.FC = () => {
  return (
    <div>
      <Title cr="red">이것은 '예' 골랐을 때만 보임</Title>
      <div>
        <Title>
          1-1-1. 현재 학교 현장에서 에듀테크를 어느 정도로 활용하고 계시는지
          선택해 주세요
        </Title>
        <Table>
          <thead>
            <tr>
              <Th width={60} colSpan={2}>
                영역
              </Th>
              <Th width={40} colSpan={5}>
                선택
              </Th>
            </tr>
          </thead>
          <tbody>
            <FivePointsTable
              rowSpan={ch2_1_questions.rowspan}
              sectionTitle={ch2_1_questions.sectionTitle}
              datas={ch2_1_questions.questions}
            />
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Ch2_1;
