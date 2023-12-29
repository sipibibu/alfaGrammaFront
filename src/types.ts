export type TextOptions = null;
export type RadioOptions = string[];
export type CheckboxOptions = string[];
export type ScaleOptions = { from: number; to: number; step: number };

export type QuestionOptions =
  | TextOptions
  | RadioOptions
  | CheckboxOptions
  | ScaleOptions;

export interface IQuestion {
  title: string;
  type: string;
  isRequired: boolean;
  options: QuestionOptions;
}

export interface IGrammaStructure {
  interest: string;
  title: string;
  description: string;
  dateFrom: string;
  dateTo: string;
  questions: IQuestion[];
}

export interface IQuestionForm extends IQuestion {
  id: number;
}

export interface IGrammaForm extends IGramma {
  questions: IQuestionForm[];
}

export interface IGramma {
  id: number;
  title: string;
  description: string;
  dateFrom: string;
  dateTo: string;
  companyName: string;
}

export type ITextAnswer = string;
export type IRadioAnswer = string;
export type ICheckboxAnswer = string[];
export type IScaleAnswer = number;

export type IQuestionAnswer = {
  question?: {questionText: string};
  questionId: number;
  text: ITextAnswer | IRadioAnswer | ICheckboxAnswer | IScaleAnswer;
};

export interface IUserResponse {
  formId: number;
  questions: IQuestionAnswer[];
}

export enum AuthorizationStatus {
  Unknown,
  NoAuth,
  Auth,
}
