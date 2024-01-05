import { IAnswerVariants } from "../../../../../types";
import styles from "./scale.module.css";
import React, { ChangeEvent } from "react";

type ScaleProps = {
  options: IAnswerVariants;
  setOptions: (prevState: IAnswerVariants) => void;
};

function Scale({ options, setOptions }: ScaleProps) {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOptions({
      ...options,
      [event.target.name]:
        parseInt(event.target.value) >= 0
          ? event.target.value[0] === "0"
            ? event.target.value.slice(1, event.target.value.length)
            : event.target.value
          : 0,
    });
    const newOptions = [...options];
    newOptions[parseInt(event.target.name)].text = event.target.value;
    setOptions(newOptions);
  };
  return (
    <div className={styles.lines}>
      <div className={styles.firstLine}>
        <div className={styles.line}>
          <label>от</label>
          <input
            type="number"
            name={"0"}
            min={0}
            value={options[0].text}
            onChange={handleOnChange}
          />
        </div>
        <div className={styles.line}>
          <label>до</label>
          <input
            type="number"
            name={"1"}
            min={0}
            value={options[1].text}
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className={styles.line}>
        <label>шаг</label>
        <input
          type="number"
          name={"2"}
          min={1}
          value={options[2].text}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}

export default React.memo(Scale);
