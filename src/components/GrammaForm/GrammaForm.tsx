import styles from './gramma-form.module.css';
import { QuestionType } from '../../const.ts';
import QuestionsList from './QuestionsList/QuestionList.tsx';
import SubmitButton from './SumbitButton/SubmitButton.tsx';
import { useState } from 'react';
import { Question, QuestionAnswer } from '../../types.ts';

const gramma = {
  title: 'Название',
  dateFrom: '2023-12-03T00:00:00+05:00',
  dateTo: '2023-12-31T00:00:00+05:00',
  description: 'Описание опроса',
  questions: [
    {
      isRequired: true,
      options: null,
      title: 'Текстовое поле',
      type: QuestionType.Text,
    },
    {
      isRequired: false,
      options: ['1 вариант', '2 вариант', '3 вариант'],
      title: 'Выбор одного',
      type: QuestionType.Radio,
    },
    {
      isRequired: false,
      options: ['1 вариант', '2 вариант', '3 вариант'],
      title: 'Выбор нескольких',
      type: QuestionType.Checkbox,
    },
    {
      isRequired: false,
      options: { from: 0, to: 100, step: 10 },
      title: 'Шкала',
      type: QuestionType.Scale,
    },
  ],
};

const getInitialUserValues = (options: Question[]) => {
  const answers: QuestionAnswer[] = [];
  for (let option of options) {
    switch (option.type) {
      case QuestionType.Text:
        answers.push('');
        break;
      case QuestionType.Radio:
        answers.push('');
        break;
      case QuestionType.Checkbox:
        answers.push([]);
        break;
      case QuestionType.Scale:
        answers.push(0);
        break;
    }
  }
  return answers;
};

export default function GrammaForm() {
  const [userAnswers, setUserAnswers] = useState(
    getInitialUserValues(gramma.questions)
  );

  const handleUserAnswerChange = (index: number, updated: QuestionAnswer) => {
    setUserAnswers((prevState) => [
      ...prevState.slice(0, index),
      updated,
      ...prevState.slice(index + 1, prevState.length),
    ]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{gramma.title}</h1>
      <p className={styles.description}>{gramma.description}</p>
      <QuestionsList
        questions={gramma.questions}
        userAnswers={userAnswers}
        onAnswerChanged={handleUserAnswerChange}
      />
      <SubmitButton answers={userAnswers} />
    </div>
  );
}
