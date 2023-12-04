import styles from '../../QuestionConstructor/QuestionsList/question-list.module.css';
import { Question, QuestionAnswer } from '../../../types.ts';
import QuestionCard from '../QuestionCard/QuestionCard.tsx';

type QuestionListProps = {
  questions: Question[];
  userAnswers: QuestionAnswer[];
  onAnswerChanged: (index: number, answer: QuestionAnswer) => void;
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
          onAnswerChanged={(answer: QuestionAnswer) =>
            onAnswerChanged(index, answer)
          }
          userAnswers={userAnswers[index]}
        />
      ))}
    </div>
  );
}
