import { IGrammaStructure } from "../types.ts";

export const SampleVariants = {
  EMPTY: "EMPTY",
  FOOD: "FOOD",
  WORK: "WORK",
  TIMEMANAGEMENT: "TIMEMANAGEMENT",
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
} as const;

export const SampleTitles = {
  [SampleVariants.EMPTY]: "Пустой шаблон",
  [SampleVariants.FOOD]: "Еда",
  [SampleVariants.TIMEMANAGEMENT]: "Таймменеджмент",
  [SampleVariants.WORK]: "Работа",
};
