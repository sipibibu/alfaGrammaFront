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
  Unknown = "Unknown",
  NoAuth = "NoAuth",
  Respondent = "Respondent",
  Manager = "Manager",
}
