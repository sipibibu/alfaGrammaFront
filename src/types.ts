export type TextOptions = null;
export type RadioOptions = string[];
export type CheckboxOptions = string[];
export type ScaleOptions = { from: number; to: number; step: number };

export type QuestionOptions =
  | TextOptions
  | RadioOptions
  | CheckboxOptions
  | ScaleOptions;

export type Question = {
  title: string;
  type: string;
  isRequired: boolean;
  options: QuestionOptions;
};

export type Gramma = {
  title: string;
  description: string;
  dateFrom: string;
  dateTo: string;
  questions: Question[];
};

export type TextAnswer = string;
export type RadioAnswer = string;
export type CheckboxAnswer = string[];
export type ScaleAnswer = number;

export type QuestionAnswer =
  | TextAnswer
  | RadioAnswer
  | CheckboxAnswer
  | ScaleAnswer;

export type UserResponse = {
  grammaId: string;
  userEmail: string;
  answers: QuestionAnswer[];
};
