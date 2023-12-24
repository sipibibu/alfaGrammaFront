import styles from "./checkboxes-field.module.css";
import { ICheckboxAnswer, CheckboxOptions } from "../../../../types.ts";
import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

type CheckboxesProps = {
  options: CheckboxOptions;
  userAnswer: ICheckboxAnswer;
  onAnswerChange: (answer: ICheckboxAnswer) => void;
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
              value={option}
            />
          }
          label={option}
          labelPlacement="end"
        />
      ))}
    </div>
  );
}

export default React.memo(CheckboxesField);
