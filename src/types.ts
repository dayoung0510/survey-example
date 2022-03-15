type AnswerType = 'Radio' | 'Checkbox' | 'TextInput' | 'TextArea';

type OptionType = {
  idx: string;
  value: number;
  text: string;
}[];

export type DataType = {
  idx: string;
  name: string;
  title: string;
  options?: OptionType;
  flex?: boolean;
  branch?: boolean;
};

export type QuestionsType = {
  idx: string;
  type: AnswerType;
  isRequired?: boolean;
  datas: DataType;
};

export type TableQuestionType = {
  idx: string;
  name: string;
  title: string;
};

export type TableSectionType = {
  idx: string;
  rowspan: number;
  sectionTitle: string;
  questions: TableQuestionType[];
};
