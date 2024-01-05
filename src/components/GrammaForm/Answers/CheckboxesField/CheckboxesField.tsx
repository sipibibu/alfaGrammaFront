import styles from "./checkboxes-field.module.css";
import {
  IAnswerVariants,
  ICheckboxAnswer,
  IQuestionAnswer,
} from "../../../../types.ts";
import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

type CheckboxesProps = {
  options: IAnswerVariants;
  userAnswer: ICheckboxAnswer;
  onAnswerChange: (answer: IQuestionAnswer["text"]) => void;
};

function CheckboxesField({
  options,
  userAnswer,
  onAnswerChange,
}: CheckboxesProps) {
  const handleCheck = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    const index = userAnswer.findIndex((answer) => answer === value);
    if (index === -1) {
      onAnswerChange([...userAnswer, value]);
    } else {
      onAnswerChange([
        ...userAnswer.slice(0, index),
        ...userAnswer.slice(index + 1, userAnswer.length),
      ]);
    }
  };
  console.log("Чекбокс");
  return (
    <div className={styles.checkItemList}>
      {options.map((option, i) => (
        <FormControlLabel
          key={i}
          control={
            <Checkbox
              sx={{
                color: "grey",
                "&.Mui-checked": {
                  color: "#ff4848",
                },
              }}
              onChange={handleCheck}
              value={option.text}
            />
          }
          label={option.text}
          labelPlacement="end"
        />
      ))}
    </div>
  );
}

export default React.memo(CheckboxesField);
