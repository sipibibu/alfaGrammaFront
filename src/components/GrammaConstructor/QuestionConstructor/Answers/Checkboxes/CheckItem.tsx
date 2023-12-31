import styles from './checkboxes.module.css';
import React, { ChangeEvent } from 'react';

type CheckItemProps = {
  value: string;
  index: number;
  onChange: (event: ChangeEvent<HTMLInputElement>, key: number) => void;
};

function CheckItem({ value, index, onChange }: CheckItemProps) {
  return (
    <div className={styles.radioItem}>
      <input name="check" type="radio" value={'1'} disabled />
      <label />
      <input
        placeholder="Добавить вариант"
        className={styles.text}
        type={'text'}
        value={value}
        onChange={(evt) => onChange(evt, index)}
      />
    </div>
  );
}

export default React.memo(CheckItem);
