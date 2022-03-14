type AnswerType =
  | 'RequiredRadio'
  | 'OptionalRadio'
  | 'RequiredCheckbox'
  | 'OptionalCheckbox'
  | 'RequiredText'
  | 'OptionalText';

type OptionType = {
  value: number;
  text: string;
}[];

export type DataType = {
  idx: number;
  name: string;
  title: string;
  options?: OptionType;
  flex?: boolean;
};

type QuestionsType = {
  id: number;
  type: AnswerType;
  datas: DataType;
};

export const ch1_questions: QuestionsType[] = [
  {
    id: 1,
    type: 'RequiredText',
    datas: {
      idx: 1,
      name: 'a1',
      title: '성명',
    },
  },
  {
    id: 2,
    type: 'RequiredText',
    datas: {
      idx: 2,
      name: 'a2',
      title: '연락처',
    },
  },
  {
    id: 3,
    type: 'RequiredRadio',
    datas: {
      idx: 3,
      name: 'a3',
      title: '성별을 선택해 주세요.',
      options: [
        { value: 1, text: '남자' },
        { value: 2, text: '여자' },
      ],
    },
  },
  {
    id: 4,
    type: 'RequiredRadio',
    datas: {
      idx: 4,
      name: 'a4',
      title: '연령을 선택해 주세요.',
      options: [
        { value: 1, text: '20대' },
        { value: 2, text: '30대' },
        { value: 3, text: '40대' },
        { value: 4, text: '50대 이상' },
      ],
    },
  },
  {
    id: 5,
    type: 'RequiredRadio',
    datas: {
      idx: 5,
      name: 'a5',
      title: '근무하고 계신 지역을 선택해 주세요..',
      options: [
        { value: 1, text: '서울' },
        { value: 2, text: '부산' },
        { value: 3, text: '대구' },
        { value: 4, text: '인천' },
        { value: 5, text: '광주' },
        { value: 6, text: '대전' },
        { value: 7, text: '울산' },
        { value: 8, text: '세종' },
        { value: 9, text: '경기' },
        { value: 10, text: '강원' },
        { value: 11, text: '충북' },
        { value: 12, text: '충남' },
        { value: 13, text: '전북' },
        { value: 14, text: '전남' },
        { value: 15, text: '경북' },
        { value: 16, text: '경남' },
        { value: 17, text: '제주' },
      ],
      flex: true,
    },
  },
];
