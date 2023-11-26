import styles from './types-select.module.css';
import { QuestionType } from '../../../const.ts';
import React, { useState } from 'react';
import * as classNames from 'classnames';

type TypesSelectProps = {
  questionType: string;
  setQuestionType: (type: string) => void;
};

const getTitle = (questionType: string) => {
  switch (questionType) {
    case QuestionType.Text:
      return 'Текстовое поле';
    case QuestionType.Radio:
      return 'Выбор одного';
    case QuestionType.Checkbox:
      return 'Выбор нескольких';
    default:
    case QuestionType.Scale:
      return 'Шкала';
  }
};

function TypesSelect({ questionType, setQuestionType }: TypesSelectProps) {
  const [isMenuShowed, setIsMenuShown] = useState(false);

  const handleTypeChange = (event: any) => {
    setQuestionType(event.target.dataset.questionType);
    setIsMenuShown(false);
  };

  const handleShowMenu = () => {
    setIsMenuShown((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.types} onClick={handleShowMenu}>
          {getTitle(questionType)}
        </div>
        <ul
          className={classNames(styles.options, !isMenuShowed && styles.hidden)}
          onClick={handleTypeChange}
        >
          <li
            data-question-type={QuestionType.Text}
            className={questionType === QuestionType.Text ? styles.hidden : ''}
          >
            {getTitle(QuestionType.Text)}
          </li>
          <li
            data-question-type={QuestionType.Radio}
            className={questionType === QuestionType.Radio ? styles.hidden : ''}
          >
            {getTitle(QuestionType.Radio)}
          </li>
          <li
            data-question-type={QuestionType.Checkbox}
            className={
              questionType === QuestionType.Checkbox ? styles.hidden : ''
            }
          >
            {getTitle(QuestionType.Checkbox)}
          </li>
          <li
            data-question-type={QuestionType.Scale}
            className={questionType === QuestionType.Scale ? styles.hidden : ''}
          >
            {getTitle(QuestionType.Scale)}
          </li>
        </ul>
      </div>
    </>
  );
}

export default React.memo(TypesSelect);
