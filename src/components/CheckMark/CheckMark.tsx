import styles from './checkmark.module.css';
import React, { ChangeEvent } from 'react';

type CheckMarkProps = {
  value: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
};

function CheckMark({ value, checked, onChange }: CheckMarkProps) {
  return (
    <label className={styles.checkbox}>
      <div className={styles.checkbox__body}>{value}</div>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <div className={styles.checkbox__checkmark}></div>
    </label>
  );
}

export default React.memo(CheckMark);
