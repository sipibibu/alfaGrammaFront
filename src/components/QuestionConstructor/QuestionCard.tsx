import styles from './question-card.module.css';
import CheckMark from '../CheckMark/CheckMark.tsx';
import React, { ChangeEvent, useCallback } from 'react';
import TypesSelect from './TypesSelect/TypesSelect.tsx';
import { QuestionType } from '../../const.ts';
import Scale from './Answers/Scale/Scale.tsx';
import Text from './Answers/Text/Text.tsx';
import Radio from './Answers/Radio/Radio.tsx';
import Checkboxes from './Answers/Checkboxes/Checkboxes.tsx';
import {
  CheckboxOptions,
  Question,
  QuestionOptions,
  RadioOptions,
  ScaleOptions,
  TextOptions,
} from '../../types.ts';

type QuestionCardProps = {
  question: Question;
  questionChange: (updatedQuestion: Question, index: number) => void;
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
      return { from: 0, to: 0, step: 1 } as QuestionOptions;
  }
};

const getQuestionField = (
  questionType: string,
  options: QuestionOptions,
  setOptions: (options: QuestionOptions) => void
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

function QuestionCard({ question, questionChange, index }: QuestionCardProps) {
  const handleTitleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      questionChange({ ...question, title: event.target.value }, index);
    },
    [question, questionChange]
  );

  const handleTypeChange = useCallback(
    (type: string) => {
      questionChange(
        {
          ...question,
          type: type,
          options: getQuestionOptions(type),
        },
        index
      );
    },
    [question, questionChange]
  );

  const handleIsRequiredChange = useCallback(() => {
    questionChange(
      {
        ...question,
        isRequired: !question.isRequired,
      },
      index
    );
  }, [question, questionChange]);

  const handleOptionsChange = useCallback(
    (options: QuestionOptions) => {
      questionChange(
        {
          ...question,
          options: options,
        },
        index
      );
    },
    [question, questionChange]
  );

  return (
    <div className={styles.card}>
      <div className={styles.menu}>
        <input
          className={styles.title}
          placeholder={'Введите вопрос'}
          value={question.title}
          onChange={handleTitleChange}
        />
        <div className={styles.right}>
          <TypesSelect
            questionType={question.type}
            setQuestionType={handleTypeChange}
          />
          <CheckMark
            value={'Обязательный'}
            checked={question.isRequired}
            onChange={handleIsRequiredChange}
          />
        </div>
      </div>
      <div className={styles.questionField}>
        {getQuestionField(question.type, question.options, handleOptionsChange)}
      </div>
    </div>
  );
}

export default React.memo(QuestionCard);
