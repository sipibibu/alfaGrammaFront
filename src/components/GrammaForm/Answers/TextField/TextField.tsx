import styles from "./text-field.module.css";
import { TextAnswer } from "../../../../types.ts";

type TextProps = {
  userAnswer: TextAnswer;
  onAnswerChanged: (answer: TextAnswer) => void;
};

export default function TextField({ onAnswerChanged }: TextProps) {
  return (
    <input
      type={"text"}
      placeholder={"Введите ответ"}
      className={styles.answer}
      onChange={(evt) => onAnswerChanged(evt.target.value)}
    />
  );
}
