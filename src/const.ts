import { IInterest } from "./types.ts";

export const QuestionType = {
  Text: "TextQuestion",
  Checkbox: "CheckboxQuestion",
  Radio: "RadioQuestion",
  Scale: "ScaleQuestion",
};

export enum Role {
  None = "None",
  NoAuth = "NoAuth",
  Respondent = "Respondent",
  Manager = "Manager",
}

export const WithoutInterest = {
  id: 0,
  name: "Не выбрано",
} as IInterest;
