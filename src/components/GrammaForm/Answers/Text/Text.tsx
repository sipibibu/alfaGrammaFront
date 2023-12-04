import styles from '../../../QuestionConstructor/Answers/Text/text.module.css';
import { TextAnswer } from '../../../../types.ts';

type TextProps = {
  userAnswer: TextAnswer;
  onAnswerChanged: (answer: TextAnswer) => void;
};

export default function Text({ onAnswerChanged }: TextProps) {
  return (
    <input
      type={'text'}
      placeholder={'Введите ответ'}
      className={styles.answer}
      onChange={(evt) => onAnswerChanged(evt.target.value)}
    />
  );
}
