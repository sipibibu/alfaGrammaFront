import styles from "./scale-field.module.css";
import { IAnswerVariants, IScaleAnswer } from "../../../../types.ts";
import React from "react";
import { Slider } from "@mui/material";

type ScaleProps = {
  options: IAnswerVariants;
  userAnswer: IScaleAnswer;
  onAnswerChange: (answer: IScaleAnswer) => void;
};

const getMarks = (from: number, to: number, step: number) => {
  const marks = [];
  if (step <= 0) {
    step = 1;
  }
  // while ((to - from) / step > 20) {
  //   step += 1;
  // }
  marks.push({ value: from, label: from });
  for (let i = from + 1; i < to; i += step) {
    marks.push({ value: i, label: "" });
  }
  marks.push({ value: to, label: to });
  return marks;
};

function ScaleField({ options, userAnswer, onAnswerChange }: ScaleProps) {
  const [from, to, step] = options.map((options) => parseInt(options.text));
  const handleChange = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      onAnswerChange(newValue);
    }
  };
  console.log(from, to, step);
  return (
    <div className={styles.scale}>
      <Slider
        value={userAnswer}
        onChange={handleChange}
        marks={getMarks(from, to, step)}
        defaultValue={from}
        min={from}
        max={to}
        step={step}
        sx={{
          color: "#ff4848",
          width: "80%",
          "& .MuiSlider-thumb": {
            boxShadow: "0 0 0 8px rgba(255, 72, 72, 0.16)",
          },
          "& .MuiSlider-thumb:hover": {
            boxShadow: "0 0 0 12px rgba(255, 72, 72, 0.16)",
          },
        }}
      />
    </div>
  );
}

export default React.memo(ScaleField);
