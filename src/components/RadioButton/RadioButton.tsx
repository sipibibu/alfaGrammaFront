import styles from './radio-button.module.css';
import React from 'react';

type RadioButtonProps = {
  children: string;
  onChange: (value: string) => void;
  checked?: boolean;
};

function RadioButton({ children, onChange, checked }: RadioButtonProps) {
  return (
    <div className={styles.radioButton} onClick={() => onChange(children)}>
      <input type="radio" value={children} checked={checked} readOnly />
      <label>{children}</label>
    </div>
  );
}

export default React.memo(RadioButton);
