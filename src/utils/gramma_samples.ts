import { IGrammaConstructor, IQuestion } from "../types.ts";
import { QuestionType } from "../const.ts";

export const SampleVariants = {
  EMPTY: "EMPTY",
  FOOD: "FOOD",
  WORK: "WORK",
  TIMEMANAGEMENT: "TIMEMANAGEMENT",
  TEST: "TEST",
} as const;

export const Samples = {
  [SampleVariants.EMPTY]: {
    interest: "",
    dateFrom: "",
    dateTo: "",
    description: "",
    questions: [],
    title: "",
  } as IGrammaConstructor,
  [SampleVariants.FOOD]: {
    interest: "Еда",
    dateFrom: "",
    dateTo: "",
    description: "",
    questions: [],
    title: "Любимая кухня",
  } as IGrammaConstructor,
  [SampleVariants.TIMEMANAGEMENT]: {
    interest: "Тайм-менеджмент",
    dateFrom: "",
    dateTo: "",
    description: "Тайм-менеджмент",
    questions: [
      {
        title: "Какие трудности вы испытываете при управлении своим временем?",
        type: QuestionType.Text,
        isRequired: true,
        options: [],
      } as IQuestion,
      {
        title: "Как бы вы охарактеризовали своё управление временем?",
        type: QuestionType.Radio,
        isRequired: false,
        options: [
          { text: "очень хорошо" },
          { text: "не очень" },
          { text: "плохо" },
        ],
      } as IQuestion,
      {
        title: "Как вы оцениваете своё умение управлять временем?",
        type: QuestionType.Scale,
        isRequired: false,
        options: [{ text: "0" }, { text: "100" }, { text: "10" }],
      } as IQuestion,
      {
        title: "Как бы вы хотели улучшить свое управление временем?",
        type: QuestionType.Checkbox,
        isRequired: false,
        options: [
          { text: "ничего не менять" },
          { text: "изменить хоть что-то" },
          { text: "поставить цель" },
        ],
      } as IQuestion,
    ],
    title: "Управление временем",
  } as IGrammaConstructor,
  [SampleVariants.WORK]: {
    interest: "IT",
    dateFrom: "",
    dateTo: "",
    description: "",
    questions: [],
    title: "Удовлетворенность работой",
  } as IGrammaConstructor,
  [SampleVariants.TEST]: {
    interest: "",
    dateFrom: "2023-12-24T06:35",
    dateTo: "2023-12-30T06:35",
    description: "description",
    questions: [
      {
        title: "1 вопрос",
        type: QuestionType.Text,
        isRequired: true,
        options: [],
      } as IQuestion,
      {
        title: "2 вопрос",
        type: QuestionType.Radio,
        isRequired: false,
        options: [{ text: "1" }, { text: "2" }, { text: "3" }],
      } as IQuestion,
      {
        title: "3 вопрос",
        type: QuestionType.Checkbox,
        isRequired: false,
        options: [{ text: "1" }, { text: "2" }, { text: "3" }],
      } as IQuestion,
      {
        title: "4 вопрос",
        type: QuestionType.Scale,
        isRequired: false,
        options: [{ text: "0" }, { text: "100" }, { text: "10" }],
      } as IQuestion,
    ],
    title: "Title",
  } as IGrammaConstructor,
} as const;

export const SampleTitles = {
  [SampleVariants.EMPTY]: "Пустой шаблон",
  [SampleVariants.FOOD]: "Еда",
  [SampleVariants.TIMEMANAGEMENT]: "Тайм-менеджмент",
  [SampleVariants.WORK]: "Работа",
  [SampleVariants.TEST]: "ТЕСТ",
};
