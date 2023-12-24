import QuestionCard from "../QuestionCard.tsx";
import styles from "./question-list.module.css";
import { Question } from "../../../types.ts";
import { QuestionType } from "../../../const.ts";
import NewQuestionButton from "../NewQuestionButton/NewQuestionButton.tsx";
import React, { useCallback } from "react";

type QuestionListProps = {
  questionsList: Question[];
  questionsChange: (questions: Question[]) => void;
};

const initialQuestion: Question = {
  title: "",
  type: QuestionType.Text,
  isRequired: false,
  options: null,
};

function QuestionsList({ questionsList, questionsChange }: QuestionListProps) {
  const handleQuestionChange = useCallback(
    (updatedQuestion: Question, index: number) => {
      questionsChange([
        ...questionsList.slice(0, index),
        updatedQuestion,
        ...questionsList.slice(index + 1, questionsList.length),
      ]);
    },
    [questionsList, questionsChange],
  );

  const handleAddQuestion = useCallback(() => {
    questionsChange([...questionsList, initialQuestion]);
  }, [questionsList, questionsChange]);

  const handleDeleteQuestion = useCallback(
    (index: number) => {
      questionsChange([
        ...questionsList.slice(0, index),
        ...questionsList.slice(index + 1, questionsList.length),
      ]);
    },
    [questionsChange, questionsList],
  );

  return (
    <div className={styles.questions}>
      {questionsList.map((question, index) => (
        <QuestionCard
          question={question}
          index={index}
          key={index}
          handleDeleteQuestion={handleDeleteQuestion}
          handleQuestionChange={handleQuestionChange}
        />
      ))}
      <NewQuestionButton onClick={handleAddQuestion} />
    </div>
  );
}

export default React.memo(QuestionsList);
