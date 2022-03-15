import { QuestionsType, TableSectionType } from 'types';

export const ch1_questions: QuestionsType[] = [
  {
    idx: '1',
    type: 'TextInput',
    isRequired: true,
    datas: {
      idx: '1',
      name: 'a1',
      title: '성명 (필수)',
    },
  },
  {
    idx: '2',
    type: 'TextInput',
    isRequired: true,
    datas: {
      idx: '2',
      name: 'a2',
      title: '연락처 (필수)',
    },
  },
  {
    idx: '3',
    type: 'Radio',
    isRequired: true,
    datas: {
      idx: '3',
      name: 'a3',
      title: '연령을 선택해 주세요. (필수)',
      options: [
        { idx: '1', value: 1, text: '20대' },
        { idx: '2', value: 2, text: '30대' },
        { idx: '3', value: 3, text: '40대' },
        { idx: '4', value: 4, text: '50대 이상' },
      ],
    },
  },
  {
    idx: '4',
    type: 'Radio',
    datas: {
      idx: '4',
      name: 'a4',
      title: '근무하고 계신 지역을 선택해 주세요. (선택)',
      options: [
        { idx: '1', value: 1, text: '서울' },
        { idx: '2', value: 2, text: '부산' },
        { idx: '3', value: 3, text: '대구' },
        { idx: '4', value: 4, text: '인천' },
        { idx: '5', value: 5, text: '광주' },
        { idx: '6', value: 6, text: '대전' },
        { idx: '7', value: 7, text: '울산' },
        { idx: '8', value: 8, text: '세종' },
        { idx: '9', value: 9, text: '경기' },
        { idx: '10', value: 10, text: '강원' },
        { idx: '11', value: 11, text: '충북' },
        { idx: '12', value: 12, text: '충남' },
        { idx: '13', value: 13, text: '전북' },
        { idx: '14', value: 14, text: '전남' },
        { idx: '15', value: 15, text: '경북' },
        { idx: '16', value: 16, text: '경남' },
        { idx: '17', value: 17, text: '제주' },
      ],
      flex: true,
    },
  },
];

export const ch2_questions: QuestionsType[] = [
  {
    idx: '1',
    type: 'Radio',
    isRequired: true,
    datas: {
      idx: '1',
      name: 'b1',
      title: '학교 현장에서 에듀테크를 활용한 경험이 있는지 선택해 주세요.',
      options: [
        { idx: '1', value: 1, text: '예' },
        { idx: '2', value: 2, text: '아니오' },
      ],
      branch: true,
    },
  },
];

export const ch2_1_questions: TableSectionType = {
  idx: '1-1-1',
  rowspan: 3,
  sectionTitle: '교과수업 (방과후,돌봄교실 포함)',
  questions: [
    {
      idx: '1',
      name: 'b1-1-1-1',
      title:
        '원격 수업 도구 (예: Zoom, 구글, 행아웃, 유튜브 라이브, 카카오톡 라이브 등)',
    },
    {
      idx: '2',
      name: 'b1-1-1-2',
      title:
        '수업자료(콘텐츠 등) 제작/공유 (예: 디지털교과서,  e학습터, EBS 강좌, 아이스크림, 인디스쿨 등)',
    },
    {
      idx: '3',
      name: 'b1-1-1-3',
      title: '콘텐츠 제작 도구 (예: MS오피스 등의 문서편집도구, 미리캔버스 등)',
    },
  ],
};

export const ch2_2_questions: TableSectionType = {
  idx: '1-2-1',
  rowspan: 2,
  sectionTitle: '교과수업(방과후,돌봄교실 포함)',
  questions: [
    {
      idx: '1',
      name: 'b1-2-1-1',
      title:
        '원격 수업 도구 (예: Zoom, 구글, 행아웃, 유튜브 라이브, 카카오톡 라이브 등)',
    },
    {
      idx: '2',
      name: 'b1-2-1-2',
      title:
        '수업자료(콘텐츠 등) 제작/공유 (예: 디지털교과서,  e학습터, EBS 강좌, 아이스크림, 인디스쿨 등)',
    },
  ],
};

export const ch3_questions: QuestionsType[] = [
  {
    idx: '1',
    type: 'Checkbox',
    isRequired: true,
    datas: {
      idx: '1',
      name: 'b2',
      title:
        '예상되는 에듀테크 활용의 장점은 무엇일지 선택해 주세요. (필수) (복수선택 가능)',
      options: [
        { idx: 'b2-1', value: 1, text: '교수활동에 편의 제고' },
        { idx: 'b2-2', value: 1, text: '학습활동의 효과성 제고' },
        { idx: 'b2-3', value: 1, text: '교사의 평가 및 피드백 활동에 용이' },
        { idx: 'b2-4', value: 1, text: '학습활동의 효과성 제고' },
        { idx: 'b2-5', value: 1, text: '행정업무 경감' },
      ],
    },
  },
  {
    idx: '2',
    type: 'TextArea',
    datas: {
      idx: '2',
      name: 'b3',
      title:
        '학교 현장에서 도입되면 좋을 구체적 제품(또는 콘텐츠)이 있으면 자유롭게 작성해주세요. (선택)',
    },
  },
];
