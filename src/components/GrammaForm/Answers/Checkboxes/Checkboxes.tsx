import styles from './checkboxes.module.css';
import { CheckboxAnswer, CheckboxOptions } from '../../../../types.ts';
import React, { ChangeEvent } from 'react';
import CheckMark from '../../../CheckMark/CheckMark.tsx';

type CheckboxesProps = {
  options: CheckboxOptions;
  userAnswer: CheckboxAnswer;
  onAnswerChange: (answer: CheckboxAnswer) => void;
};

function Checkboxes({ options, userAnswer, onAnswerChange }: CheckboxesProps) {
  const handleCheck = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    const index = userAnswer.findIndex((answer) => answer === value);
    if (index === -1) {
      onAnswerChange([...userAnswer, value]);
    } else {
      onAnswerChange([
        ...userAnswer.slice(0, index),
        ...userAnswer.slice(index + 1, userAnswer.length),
      ]);
    }
  };
  return (
    <div className={styles.checkItemList}>
      {options.map((option, i) => (
        <CheckMark value={option} key={i} onChange={handleCheck} />
      ))}
    </div>
  );
}

export default React.memo(Checkboxes);
