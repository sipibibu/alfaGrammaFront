import styles from './checkmark.module.css';
import * as classNames from 'classnames';
import React, { ReactNode } from 'react';

type CheckMarkProps = {
  children: ReactNode;
  onChange: () => void;
  checked?: boolean;
  reverse?: boolean;
};

function CheckMark({ children, checked, onChange, reverse }: CheckMarkProps) {
  return (
    <label className={classNames(styles.checkbox, reverse && styles.required)}>
      <div className={styles.checkbox__body}>{children}</div>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <div className={styles.checkbox__checkmark}></div>
    </label>
  );
}

export default React.memo(CheckMark);
