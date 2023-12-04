import styles from './radio-field.module.css';
import { RadioAnswer, RadioOptions } from '../../../../types.ts';
import React from 'react';
import RadioButton from '../../../RadioButton/RadioButton.tsx';

type RadioProps = {
  options: RadioOptions;
  userAnswer: RadioAnswer;
  onAnswerChange: (answer: RadioAnswer) => void;
};

function RadioField({ options, userAnswer, onAnswerChange }: RadioProps) {
  const onChange = (value: string) => {
    onAnswerChange(value);
  };

  return (
    <div className={styles.radioList}>
      {options.map((option, i) => (
        <RadioButton
          key={i}
          onChange={onChange}
          checked={option === userAnswer}
        >
          {option}
        </RadioButton>
      ))}
    </div>
  );
}

export default React.memo(RadioField);
