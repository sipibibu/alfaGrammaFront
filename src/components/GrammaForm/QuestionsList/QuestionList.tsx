import styles from "./questions-list.module.css";
import { IQuestionAnswer, IQuestionForm } from "../../../types.ts";
import QuestionCard from "../QuestionCard/QuestionCard.tsx";

type QuestionListProps = {
  questions: IQuestionForm[];
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
          question={question}
          onAnswerChanged={(answer: IQuestionAnswer["answer"]) =>
            onAnswerChanged({ questionId: question.id, answer })
          }
          userAnswer={
            (
              userAnswers.find(
                (answer) => answer?.questionId === question.id,
              ) as IQuestionAnswer
            ).answer
          }
        />
      ))}
    </div>
  );
}
