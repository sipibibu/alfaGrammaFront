import styles from "./checkboxes.module.css";
import React, { ChangeEvent } from "react";

type CheckItemProps = {
  value: string;
  index: number;
  onChange: (event: ChangeEvent<HTMLInputElement>, key: number) => void;
  disabled?: boolean;
};

function CheckItem({ value, index, onChange, disabled }: CheckItemProps) {
  return (
    <div className={styles.radioItem}>
      <input name="check" type="radio" value={"1"} disabled />
      <label />
      <input
        disabled={disabled}
        placeholder="Добавить вариант"
        className={styles.text}
        type={"text"}
        value={value}
        onChange={(evt) => onChange(evt, index)}
      />
    </div>
  );
}

export default React.memo(CheckItem);
