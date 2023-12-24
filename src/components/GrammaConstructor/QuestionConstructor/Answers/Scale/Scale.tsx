import { ScaleOptions } from "../../../../../types";
import styles from "./scale.module.css";
import React, { ChangeEvent } from "react";

type ScaleProps = {
  options: ScaleOptions;
  setOptions: (prevState: ScaleOptions) => void;
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
  };
  return (
    <div className={styles.lines}>
      <div className={styles.firstLine}>
        <div className={styles.line}>
          <label>от</label>
          <input
            type="number"
            name={"from"}
            min={0}
            value={options.from}
            onChange={handleOnChange}
          />
        </div>
        <div className={styles.line}>
          <label>до</label>
          <input
            type="number"
            name={"to"}
            min={0}
            value={options.to}
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className={styles.line}>
        <label>шаг</label>
        <input
          type="number"
          name={"step"}
          min={1}
          value={options.step}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}

export default React.memo(Scale);
