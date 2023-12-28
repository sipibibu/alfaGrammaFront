import styles from "./radio-field.module.css";
import {
  IQuestionAnswer,
  IRadioAnswer,
  RadioOptions,
} from "../../../../types.ts";
import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

type RadioProps = {
  options: RadioOptions;
  userAnswer: IRadioAnswer;
  onAnswerChange: (answer: IQuestionAnswer["answer"]) => void;
};

function RadioField({ options, userAnswer, onAnswerChange }: RadioProps) {
  // @ts-ignore
  return (
    <div className={styles.radioList}>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {options.map((option, i) => (
            <FormControlLabel
              key={i}
              value={option.text}
              control={
                <Radio
                  sx={{
                    color: "grey",
                    "&.Mui-checked": {
                      color: "#ff4848",
                    },
                  }}
                  checked={option.text === userAnswer}
                  onChange={() => onAnswerChange(option.text)}
                />
              }
              label={option.text}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default React.memo(RadioField);
