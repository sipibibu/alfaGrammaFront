import styles from "./questions-list.module.css";
import { IQuestionAnswer, IQuestionWithId } from "../../../types.ts";
import QuestionCard from "../QuestionCard/QuestionCard.tsx";

type QuestionListProps = {
  questions: IQuestionWithId[];
  userAnswers: IQuestionAnswer[];
  onAnswerChanged: (answer: IQuestionAnswer) => void;
};

export default function QuestionList({
  questions,
  userAnswers,
  onAnswerChanged,
}: QuestionListProps) {
  return (
    <div className={styles.questions}>
      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question as IQuestionWithId}
          onAnswerChanged={(answer: IQuestionAnswer["text"]) =>
            onAnswerChanged({ questionId: question.id, text: answer })
          }
          userAnswer={
            (
              userAnswers.find(
                (answer) => answer?.questionId === question.id,
              ) as IQuestionAnswer
            ).text
          }
        />
      ))}
    </div>
  );
}
