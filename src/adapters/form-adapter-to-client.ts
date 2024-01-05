import {
  IGrammaForm,
  IQuestionAnswer,
  IQuestionWithId,
  IUserResponse,
} from "../types.ts";

type QuestionFromServer = {
  id: number;
  questionText: string;
  type: string;
  isReq: boolean;
  ansVar: [];
};

export type GrammaFromServer = {
  id: number;
  title: string;
  companyId: number;
  companyName: string;
  shortDescription: string;
  fullDescription: string;
  startingAt: [number, number, number, number, number, number, number];
  closingAt: [number, number, number, number, number, number, number];
  questions: QuestionFromServer[];
};

type AnswerFromServer = {
  id: number;
  question: QuestionFromServer;
  text: string;
};

export type AnswersFromServer = {
  formId: number;
  questions: AnswerFromServer[];
};

function adaptQuestion(question: QuestionFromServer) {
  return {
    id: question.id,
    title: question.questionText,
    type: question.type,
    isRequired: question.isReq,
    options: question.ansVar.reverse(),
  } as IQuestionWithId;
}

export function adaptGramma(gramma: GrammaFromServer) {
  return {
    id: gramma.id,
    title: gramma.title,
    description: gramma.fullDescription,
    dateFrom: "2024-01-01T00:00:00+05:00",
    dateTo: "2024-01-31T00:00:00+05:00",
    companyName: gramma.companyName,
    questions: gramma.questions
      ? gramma.questions.map((question) => adaptQuestion(question))
      : [],
  } as IGrammaForm;
}

export function adaptQuestionAnswer(question: AnswerFromServer) {
  return {
    questionId: question.id,
    text: question.text,
    question: adaptQuestion(question.question),
  } as IQuestionAnswer;
}

export function adaptAnswers(answers: AnswersFromServer[]) {
  return answers.map(
    (answer) =>
      ({
        formId: answer.formId,
        questions: answer.questions.map((question) =>
          adaptQuestionAnswer(question),
        ),
      }) as IUserResponse,
  );
}
