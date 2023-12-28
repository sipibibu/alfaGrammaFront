import { IGrammaStructure, IQuestion } from "../types.ts";
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
  } as IGrammaStructure,
  [SampleVariants.FOOD]: {
    interest: "Еда",
    dateFrom: "",
    dateTo: "",
    description: "",
    questions: [],
    title: "Любимая кухня",
  } as IGrammaStructure,
  [SampleVariants.TIMEMANAGEMENT]: {
    interest: "Таймменеджмент",
    dateFrom: "",
    dateTo: "",
    description: "",
    questions: [],
    title: "Управление временем",
  } as IGrammaStructure,
  [SampleVariants.WORK]: {
    interest: "IT",
    dateFrom: "",
    dateTo: "",
    description: "",
    questions: [],
    title: "Удовлетворенность работой",
  } as IGrammaStructure,
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
        options: null,
      } as IQuestion,
      {
        title: "2 вопрос",
        type: QuestionType.Radio,
        isRequired: false,
        options: ["1", "2", "3"],
      } as IQuestion,
      {
        title: "3 вопрос",
        type: QuestionType.Checkbox,
        isRequired: false,
        options: ["1", "2", "3"],
      } as IQuestion,
      {
        title: "4 вопрос",
        type: QuestionType.Scale,
        isRequired: false,
        options: { from: 0, to: 100, step: 10 },
      } as IQuestion,
    ],
    title: "Title",
  } as IGrammaStructure,
} as const;

export const SampleTitles = {
  [SampleVariants.EMPTY]: "Пустой шаблон",
  [SampleVariants.FOOD]: "Еда",
  [SampleVariants.TIMEMANAGEMENT]: "Таймменеджмент",
  [SampleVariants.WORK]: "Работа",
  [SampleVariants.TEST]: "ТЕСТ",
};
