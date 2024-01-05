export const QuestionType = {
  Text: "TextQuestion",
  Checkbox: "CheckboxQuestion",
  Radio: "RadioQuestion",
  Scale: "ScaleQuestion",
};

export enum AuthorizationStatus {
  Unknown,
  NoAuth,
  Auth,
}

export enum Role {
  None = "None",
  Respondent = "Respondent",
  Manager = "Manager",
}
