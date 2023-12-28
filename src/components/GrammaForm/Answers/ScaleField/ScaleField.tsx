import styles from "./scale-field.module.css";
import { IScaleAnswer, ScaleOptions } from "../../../../types.ts";
import React from "react";
import { Slider } from "@mui/material";

type ScaleProps = {
  options: ScaleOptions;
  userAnswer: IScaleAnswer;
  onAnswerChange: (answer: IScaleAnswer) => void;
};

const getMarks = ({ from, to, step }: ScaleOptions) => {
  const marks = [];
  for (let i = from; i < to; i += step) {
    marks.push({ value: i, label: i });
  }
  marks.push({ value: to, label: to });
  return marks;
};

function ScaleField({ options, userAnswer, onAnswerChange }: ScaleProps) {
  // @ts-ignore
  const from = parseInt(options.from.text);
  // @ts-ignore
  const to = parseInt(options.to.text);
  // @ts-ignore
  const step = parseInt(options.step.text);
  const handleChange = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      onAnswerChange(newValue);
    }
  };
  return (
    <div className={styles.scale}>
      <Slider
        value={userAnswer}
        onChange={handleChange}
        marks={getMarks({ from, to, step })}
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
