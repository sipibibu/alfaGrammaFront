import { IGrammaForm, IQuestionForm } from "../types.ts";
import { QuestionType } from "../const.ts";

export type GrammaFromServer = {
  id: number;
  title: string;
  companyId: number;
  companyName: string;
  shortDescription: string;
  fullDescription: string;
  startingAt: [number, number, number, number, number, number, number];
  closingAt: [number, number, number, number, number, number, number];
  questions: IQuestionForm[];
};

function adaptOptions(type: string, ansVar: string[]) {
  switch (type) {
    default:
    case "TextQuestion":
      return null;
    case "RadioQuestion":
      return ansVar;
    case "CheckboxQuestion":
      return ansVar;
    case "ScaleQuestion":
      return { from: ansVar[2], to: ansVar[1], step: ansVar[0] };
  }
}

function adaptQuestionType(type: string) {
  switch (type) {
    default:
    case "TextQuestion":
      return QuestionType.Text;
    case "RadioQuestion":
      return QuestionType.Radio;
    case "CheckboxQuestion":
      return QuestionType.Checkbox;
    case "ScaleQuestion":
      return QuestionType.Scale;
  }
}

function adaptQuestion(question: any) {
  return {
    id: question.id,
    title: question.questionText,
    type: adaptQuestionType(question.type),
    isRequired: question.isReq,
    options: adaptOptions(question.type, question.ansVar),
  };
}

export function adaptGramma(gramma: GrammaFromServer) {
  return {
    id: gramma.id,
    title: gramma.title,
    description: gramma.fullDescription,
    dateFrom: gramma.startingAt
      ? `${gramma.startingAt[0]}-${gramma.startingAt[1]}-${gramma.startingAt[2]}T${gramma.startingAt[3]}:${gramma.startingAt[4]}`
      : "",
    dateTo: gramma.startingAt
      ? `${gramma.closingAt[0]}-${gramma.closingAt[1]}-${gramma.closingAt[2]}T${gramma.closingAt[3]}:${gramma.closingAt[4]}`
      : "",
    companyName: gramma.companyName,
    questions: gramma.questions
      ? gramma.questions.map((question) => adaptQuestion(question))
      : [],
  } as IGrammaForm;
}
