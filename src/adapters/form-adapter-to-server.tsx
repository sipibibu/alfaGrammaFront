import { IGrammaConstructor, IQuestion } from "../types.ts";

function adaptQuestion(question: IQuestion) {
  return {
    questionText: question.title,
    isReq: question.isRequired,
    type: question.type,
    ansVar: question.options,
  };
}

export function adaptGramma(gramma: IGrammaConstructor) {
  return {
    title: gramma.title,
    fullDescription: gramma.description,
    start: new Date(gramma.dateFrom).toISOString(),
    end: new Date(gramma.dateTo).toISOString(),
    questions: gramma.questions.map((question) => adaptQuestion(question)),
  };
}
