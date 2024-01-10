import { IQuestion, IUserResponse } from "../types.ts";
import { QuestionType } from "../const.ts";

export const createDictQuestionsAnswers = (grammasList: IUserResponse[]) => {
  const dictQuestionsAnswers = new Map<string, string[]>();
  for (let grammas of grammasList) {
    for (let gramma of grammas.questions) {
      if (
        gramma.question?.type != undefined &&
        gramma.question?.title != undefined
      ) {
        if (dictQuestionsAnswers.size != grammas.questions.length) {
          const answerArrayOneAnswer = new Array<string>();
          if (gramma.question.type == QuestionType.Checkbox) {
            for (let answer of gramma.text.toString().split(",")) {
              answerArrayOneAnswer.push(answer);
            }
          } else answerArrayOneAnswer.push(gramma.text.toString());
          dictQuestionsAnswers.set(gramma.question.title, answerArrayOneAnswer);
        } else {
          const answersArray = dictQuestionsAnswers.get(gramma.question.title);
          if (answersArray != undefined) {
            if (gramma.question.type == QuestionType.Checkbox) {
              for (let answer of gramma.text.toString().split(",")) {
                answersArray.push(answer);
              }
            } else answersArray.push(gramma.text.toString());
            dictQuestionsAnswers.delete(gramma.question.title);
            dictQuestionsAnswers.set(gramma.question.title, answersArray);
          }
        }
      }
    }
  }
  console.log(dictQuestionsAnswers);
  return dictQuestionsAnswers;
};

export const countQuestionAnswers = (
  question: IQuestion,
  answers: string[] | undefined,
): { answer: string; count: number }[] => {
  const answerObjects = new Array<{ answer: string; count: number }>();
  if (answers != undefined) {
    if (question.options.length != 0) {
      if (question.type == QuestionType.Scale) {
        for (
          let i = Number(question.options[0].text);
          i <= Number(question.options[1].text);
          i += Number(question.options[2].text)
        ) {
          let countAnswers = 0;
          for (let j = 0; j < answers.length; j++) {
            if (i.toString() == answers[j]) {
              countAnswers += 1;
            }
          }
          if (countAnswers != 0) {
            answerObjects.push({ answer: i.toString(), count: countAnswers });
          }
        }
      } else {
        for (let i = 0; i < question.options.length; i++) {
          let countAnswers = 0;
          for (let j = 0; j < answers.length; j++) {
            if (question.options[i].text == answers[j]) {
              countAnswers += 1;
            }
          }
          answerObjects.push({
            answer: question.options[i].text,
            count: countAnswers,
          });
        }
      }
      return answerObjects;
    } else return [];
  } else return [];
};
