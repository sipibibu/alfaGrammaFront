import styles from "./radio.module.css";
import React, { ChangeEvent } from "react";

type RadioItemProps = {
  value: string;
  index: number;
  onChange: (event: ChangeEvent<HTMLInputElement>, key: number) => void;
  disabled?: boolean;
};

function RadioItem({ value, index, onChange, disabled }: RadioItemProps) {
  return (
    <div className={styles.radioItem}>
      <input name="radio" type="radio" value={"1"} disabled />
      <label />
      <input
        placeholder="Добавить вариант"
        className={styles.text}
        type={"text"}
        value={value}
        onChange={(evt) => onChange(evt, index)}
        disabled={disabled}
      />
    </div>
  );
}

export default React.memo(RadioItem);
