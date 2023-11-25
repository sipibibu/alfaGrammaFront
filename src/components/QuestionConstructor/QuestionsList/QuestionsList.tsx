import QuestionCard from '../QuestionCard.tsx';
import styles from './question-list.module.css';
import { Question } from '../../../types.ts';
import { useState } from 'react';
import { QuestionType } from '../../../const.ts';
import NewQuestionButton from '../NewQuestionButton/NewQuestionButton.tsx';

const initialQuestion: Question = {
  title: '',
  type: QuestionType.Text,
  isRequired: false,
  options: null,
};

export default function QuestionsList() {
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleQuestionChange = (updatedQuestion: Question, index: number) => {
    setQuestions((prevState: Question[]) => {
      return [
        ...prevState.slice(0, index),
        updatedQuestion,
        ...prevState.slice(index + 1, prevState.length),
      ];
    });
  };

  const handleAddQuestion = () => {
    setQuestions((prevState: Question[]) => {
      return [...prevState, initialQuestion];
    });
  };

  return (
    <div className={styles.questions}>
      {questions.map((question, index) => (
        <QuestionCard
          question={question}
          index={index}
          key={index}
          questionChange={handleQuestionChange}
        />
      ))}
      <NewQuestionButton onClick={handleAddQuestion} />
    </div>
  );
}
