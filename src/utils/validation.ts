import { IAnswerVariants, IGrammaConstructor, IQuestion } from "../types.ts";
import { toast } from "react-toastify";
import { QuestionType } from "../const.ts";

export function validateConstructor(gramma: IGrammaConstructor) {
  if (gramma.title.length < 5) {
    toast.warn("Название опроса должно содеражать хотя бы 5 символов");
    return false;
  }
  if (gramma.description.length < 20) {
    toast.warn("Описание опроса должно содеражать хотя бы 20 символов");
    return false;
  }
  if (!gramma.dateFrom) {
    toast.warn("Дата начала не должна быть пустой");
    return false;
  }
  if (!gramma.dateTo) {
    toast.warn("Дата конца не должна быть пустой");
    return false;
  }
  if (!gramma.interest) {
    toast.warn("Должен быть выбран интерес");
    return false;
  }
  if (gramma.questions.length === 0) {
    toast.warn("Должен быть хотя бы один вопрос");
    return false;
  }
  for (let question of gramma.questions) {
    if (!validateQuestion(question)) {
      return false;
    }
  }
  return true;
}

function validateQuestion(question: IQuestion) {
  if (question.title.length < 5) {
    toast.warn("Название всех вопросов должно содеражать хотя бы 5 символов");
    return false;
  }
  if (!validateOptions(question.options, question.type)) {
    return false;
  }
  return true;
}

function validateOptions(options: IAnswerVariants, type: string) {
  switch (type) {
    case QuestionType.Radio:
      if (options.length < 2) {
        toast.warn(
          'В вопросе с типом "Выбор одного" должно быть хотя бы 2 варианта ответа',
        );
        return false;
      }
      break;
    case QuestionType.Checkbox:
      if (options.length < 2) {
        toast.warn(
          'В вопросе с типом "Выбор нескольких" должно быть хотя бы 2 варианта ответа',
        );
        return false;
      }
      break;
    case QuestionType.Scale:
      if (parseInt(options[2].text) < 1) {
        toast.warn(
          'В вопросе с типом "Шкала" шаг не должен быть меньше единицы',
        );
        return false;
      }
      break;
    default:
      return true;
  }
  return true;
}