import QuestionCard from "../QuestionCard.tsx";
import styles from "./question-list.module.css";
import NewQuestionButton from "../NewQuestionButton/NewQuestionButton.tsx";
import React, { useCallback } from "react";
import { IQuestion } from "../../../../types.ts";
import { QuestionType } from "../../../../const.ts";

type QuestionListProps = {
  questionsList: IQuestion[];
  questionsChange: (questions: IQuestion[]) => void;
  disabled?: boolean;
};

const initialQuestion: IQuestion = {
  title: "",
  type: QuestionType.Text,
  isRequired: false,
  options: [],
};

function QuestionsList({
  questionsList,
  questionsChange,
  disabled,
}: QuestionListProps) {
  const handleQuestionChange = useCallback(
    (updatedQuestion: IQuestion, index: number) => {
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
          disabled={disabled}
        />
      ))}
      <NewQuestionButton onClick={handleAddQuestion} />
    </div>
  );
}

export default React.memo(QuestionsList);
