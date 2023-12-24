import {
  CheckboxOptions,
  Gramma,
  Question,
  QuestionOptions,
  ScaleOptions,
} from "../types.ts";
import { QuestionType } from "../const.ts";

function adaptQuestionType(questionType: string) {
  switch (questionType) {
    default:
    case QuestionType.Text:
      return "TextQuestion";
    case QuestionType.Radio:
      return "RadioQuestion";
    case QuestionType.Checkbox:
      return "CheckboxQuestion";
    case QuestionType.Scale:
      return "ScaleQuestion";
  }
}

function adaptOptions(questionType: string, options: QuestionOptions) {
  switch (questionType) {
    default:
    case QuestionType.Text:
      return [];
    case QuestionType.Checkbox:
    case QuestionType.Radio:
      const radioCheckboxOptions = options as CheckboxOptions;
      return radioCheckboxOptions.map((option) => ({ text: option }));
    case QuestionType.Scale:
      const scaleOptions = options as ScaleOptions;
      return [
        { text: scaleOptions.from },
        { text: scaleOptions.to },
        { text: scaleOptions.step },
      ];
  }
}

function adaptQuestion(question: Question) {
  return {
    questionText: question.title,
    isReq: question.isRequired,
    type: adaptQuestionType(question.type),
    ansVar: adaptOptions(question.type, question.options),
  };
}

export function adaptGramma(gramma: Gramma) {
  return {
    title: gramma.title,
    fullDescription: gramma.description,
    start: gramma.dateFrom,
    end: gramma.dateTo,
    questions: gramma.questions.map((question) => adaptQuestion(question)),
  };
}
