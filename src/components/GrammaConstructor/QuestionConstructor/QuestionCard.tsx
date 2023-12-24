import styles from "./question-card.module.css";
import React, { ChangeEvent, useCallback } from "react";
import TypesSelect from "./TypesSelect/TypesSelect.tsx";
import Scale from "./Answers/Scale/Scale.tsx";
import Text from "./Answers/Text/Text.tsx";
import Radio from "./Answers/Radio/Radio.tsx";
import Checkboxes from "./Answers/Checkboxes/Checkboxes.tsx";
import DeleteQuestionButton from "./DeleteQuestionButton/DeleteQuestionButton.tsx";
import { Checkbox, FormControlLabel } from "@mui/material";
import { QuestionType } from "../../../const.ts";
import {
  CheckboxOptions,
  IQuestion,
  QuestionOptions,
  RadioOptions,
  ScaleOptions,
  TextOptions,
} from "../../../types.ts";

type QuestionCardProps = {
  question: IQuestion;
  handleQuestionChange: (updatedQuestion: IQuestion, index: number) => void;
  handleDeleteQuestion: (index: number) => void;
  index: number;
};

const getQuestionOptions = (questionType: string) => {
  switch (questionType) {
    default:
    case QuestionType.Text:
      return null as TextOptions;
    case QuestionType.Radio:
      return [] as RadioOptions;
    case QuestionType.Checkbox:
      return [] as CheckboxOptions;
    case QuestionType.Scale:
      return { from: 0, to: 0, step: 1 } as ScaleOptions;
  }
};

const getQuestionField = (
  questionType: string,
  options: QuestionOptions,
  setOptions: (options: QuestionOptions) => void,
) => {
  switch (questionType) {
    default:
    case QuestionType.Text:
      return <Text />;
    case QuestionType.Radio:
      return (
        <Radio options={options as RadioOptions} setOptions={setOptions} />
      );
    case QuestionType.Checkbox:
      return (
        <Checkboxes
          options={options as CheckboxOptions}
          setOptions={setOptions}
        />
      );
    case QuestionType.Scale:
      return (
        <Scale options={options as ScaleOptions} setOptions={setOptions} />
      );
  }
};

function QuestionCard({
  question,
  handleQuestionChange,
  handleDeleteQuestion,
  index,
}: QuestionCardProps) {
  const handleTitleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      handleQuestionChange({ ...question, title: event.target.value }, index);
    },
    [question, handleQuestionChange],
  );

  const handleTypeChange = useCallback(
    (type: string) => {
      handleQuestionChange(
        {
          ...question,
          type: type,
          options: getQuestionOptions(type),
        },
        index,
      );
    },
    [question, handleQuestionChange],
  );

  const handleIsRequiredChange = useCallback(() => {
    handleQuestionChange(
      {
        ...question,
        isRequired: !question.isRequired,
      },
      index,
    );
  }, [question, handleQuestionChange]);

  const handleOptionsChange = useCallback(
    (options: QuestionOptions) => {
      handleQuestionChange(
        {
          ...question,
          options: options,
        },
        index,
      );
    },
    [question, handleQuestionChange],
  );

  const handleDelete = useCallback(() => {
    handleDeleteQuestion(index);
  }, [handleDeleteQuestion, index]);

  return (
    <div className={styles.card}>
      <div className={styles.menu}>
        <input
          className={styles.title}
          placeholder={"Введите вопрос"}
          value={question.title}
          onChange={handleTitleChange}
        />
        <div className={styles.right}>
          <TypesSelect
            questionType={question.type}
            setQuestionType={handleTypeChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#ff4848",
                  "&.Mui-checked": {
                    color: "#ff4848",
                  },
                }}
              />
            }
            label="Обязательный"
            labelPlacement="end"
            checked={question.isRequired}
            onChange={handleIsRequiredChange}
          />
        </div>
      </div>
      <div className={styles.questionField}>
        {getQuestionField(question.type, question.options, handleOptionsChange)}
      </div>
      <DeleteQuestionButton onClick={handleDelete} />
    </div>
  );
}

export default React.memo(QuestionCard);
