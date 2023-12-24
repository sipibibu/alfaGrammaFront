import styles from "./radio-field.module.css";
import { RadioAnswer, RadioOptions } from "../../../../types.ts";
import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

type RadioProps = {
  options: RadioOptions;
  userAnswer: RadioAnswer;
  onAnswerChange: (answer: RadioAnswer) => void;
};

function RadioField({ options, userAnswer, onAnswerChange }: RadioProps) {
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
              value={option}
              control={
                <Radio
                  sx={{
                    color: "grey",
                    "&.Mui-checked": {
                      color: "#ff4848",
                    },
                  }}
                  checked={option === userAnswer}
                  onChange={() => onAnswerChange(option)}
                />
              }
              label={option}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default React.memo(RadioField);
