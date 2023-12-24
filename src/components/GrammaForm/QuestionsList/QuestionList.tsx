import styles from "./questions-list.module.css";
import { IQuestion, IQuestionAnswer } from "../../../types.ts";
import QuestionCard from "../QuestionCard/QuestionCard.tsx";

type QuestionListProps = {
  questions: IQuestion[];
  userAnswers: IQuestionAnswer[];
  onAnswerChanged: (index: number, answer: IQuestionAnswer) => void;
};

export default function QuestionList({
  questions,
  userAnswers,
  onAnswerChanged,
}: QuestionListProps) {
  return (
    <div className={styles.questions}>
      {questions.map((question, index) => (
        <QuestionCard
          key={index}
          question={question}
          onAnswerChanged={(answer: IQuestionAnswer) =>
            onAnswerChanged(index, answer)
          }
          userAnswers={userAnswers[index]}
        />
      ))}
    </div>
  );
}
