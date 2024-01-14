type IAnswerVariant = {
  id?: number;
  text: string;
};

export type IAnswerVariants = IAnswerVariant[];

export interface IQuestion {
  title: string;
  type: string;
  isRequired: boolean;
  options: IAnswerVariants;
}

export interface IQuestionWithId extends IQuestion {
  id: number;
}

export interface IGrammaConstructor {
  interest: IInterest;
  title: string;
  description: string;
  dateFrom: string;
  dateTo: string;
  questions: IQuestion[];
}

export interface IGramma {
  id: number;
  title: string;
  description: string;
  dateFrom: string;
  dateTo: string;
  companyName: string;
  interests: number[];
}

export interface IGrammaForm extends IGramma {
  questions: IQuestionWithId[];
}

export type ITextAnswer = string;
export type IRadioAnswer = string;
export type ICheckboxAnswer = string[];
export type IScaleAnswer = number;

export type IQuestionAnswer = {
  questionId: number;
  text: ITextAnswer | IRadioAnswer | ICheckboxAnswer | IScaleAnswer;
  question?: IQuestionWithId;
};

export interface IUserResponse {
  formId: number;
  questions: IQuestionAnswer[];
}

export interface IInterest {
  id: number;
  name: string;
}
