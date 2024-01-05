import { IQuestionAnswer, IUserResponse } from "../types.ts";

export function adaptAnswer(answers: IQuestionAnswer[], grammaId: number) {
  return {
    formId: grammaId,
    questions: answers.map((answer) => ({
      ...answer,
      text: answer.text.toString(),
    })),
  } as IUserResponse;
}
