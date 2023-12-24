import { QuestionType } from "../../../const.ts";
import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type TypesSelectProps = {
  questionType: string;
  setQuestionType: (type: string) => void;
};

const getTitle = (questionType: string) => {
  switch (questionType) {
    case QuestionType.Text:
      return "Текстовое поле";
    case QuestionType.Radio:
      return "Выбор одного";
    case QuestionType.Checkbox:
      return "Выбор нескольких";
    default:
    case QuestionType.Scale:
      return "Шкала";
  }
};

function TypesSelect({ questionType, setQuestionType }: TypesSelectProps) {
  return (
    <FormControl size="small">
      <InputLabel>Тип вопроса</InputLabel>
      <Select
        value={questionType}
        onChange={(event) => setQuestionType(event.target.value)}
        autoWidth
        label="Тип вопроса"
      >
        <MenuItem value={QuestionType.Text}>
          {getTitle(QuestionType.Text)}
        </MenuItem>
        <MenuItem value={QuestionType.Radio}>
          {getTitle(QuestionType.Radio)}
        </MenuItem>
        <MenuItem value={QuestionType.Checkbox}>
          {getTitle(QuestionType.Checkbox)}
        </MenuItem>
        <MenuItem value={QuestionType.Scale}>
          {getTitle(QuestionType.Scale)}
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default React.memo(TypesSelect);
