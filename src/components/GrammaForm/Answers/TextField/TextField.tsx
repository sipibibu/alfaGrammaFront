import styles from "./text-field.module.css";
import { ITextAnswer } from "../../../../types.ts";

type TextProps = {
  userAnswer: ITextAnswer;
  onAnswerChanged: (answer: ITextAnswer) => void;
};

export default function TextField({ onAnswerChanged }: TextProps) {
  console.log("Текст");
  return (
    <input
      type={"text"}
      placeholder={"Введите ответ"}
      className={styles.answer}
      onChange={(evt) => onAnswerChanged(evt.target.value)}
    />
  );
}
