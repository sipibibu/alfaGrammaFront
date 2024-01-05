import {
  IAnswerVariants,
  ICheckboxAnswer,
  IGrammaConstructor,
  IQuestion,
  IQuestionAnswer,
  IQuestionWithId,
  IRadioAnswer,
  ITextAnswer,
} from "../types.ts";
import { toast } from "react-toastify";
import { QuestionType } from "../const.ts";
import { IUserAuth } from "../models/IUser.ts";

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
  return validateOptions(question.options, question.type);
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

export function validateAnswers(
  answers: IQuestionAnswer[],
  questions: IQuestionWithId[],
) {
  for (let answer of answers) {
    const question = questions.find(
      (question) => question.id === answer.questionId,
    );
    if (!question?.isRequired) {
      continue;
    }
    switch (question?.type) {
      case QuestionType.Text:
        if ((answer.text as ITextAnswer) === "") {
          toast.warn(
            `На вопрос "${
              question?.title.length > 40
                ? question?.title.slice(0, 40) + "..."
                : question?.title
            }" не дан ответ`,
          );
          return false;
        }
        break;
      case QuestionType.Radio:
        if ((answer.text as IRadioAnswer) === "") {
          toast.warn(
            `На вопрос "${
              question?.title.length > 40
                ? question?.title.slice(0, 40) + "..."
                : question?.title
            }" не дан ответ`,
          );
          return false;
        }
        break;
      case QuestionType.Checkbox:
        if ((answer.text as ICheckboxAnswer).length === 0) {
          toast.warn(
            `На вопрос "${
              question?.title.length > 40
                ? question?.title.slice(0, 40) + "..."
                : question?.title
            }" не дан ответ`,
          );
          return false;
        }
        break;
    }
  }
  return true;
}

export function validateRegistrationForm(user: IUserAuth) {
  if (user.name === "") {
    toast.warn("Имя пользователя не должно быть пустым");
    return false;
  }
  if (user.surname === "") {
    toast.warn("Фамилия пользователя не должна быть пустой");
    return false;
  }
  if (/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+)/.test(user.login)) {
    toast.warn("Указан некорректный email");
    return false;
  }
  if (/[a-zA-Z]/.test(user.password)) {
    toast.warn("Пароль должен содержать хотя бы 1 букву");
    return false;
  }
  if (/[0-9]/.test(user.password)) {
    toast.warn("Пароль должен содержать хотя бы 1 цифру");
    return false;
  }
  if (user.password.length < 5) {
    toast.warn("Пароль не должен быть короче 5 символов");
    return false;
  }
  return true;
}

export function validateLoginForm(email: string) {
  if (/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+)/.test(email)) {
    toast.warn("Указан некорректный email");
    return false;
  }
  return true;
}
