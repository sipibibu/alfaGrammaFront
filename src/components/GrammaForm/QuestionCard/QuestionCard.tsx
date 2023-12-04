import styles from './question-card.module.css';
import {
  CheckboxAnswer,
  CheckboxOptions,
  Question,
  QuestionAnswer,
  RadioAnswer,
  RadioOptions,
  ScaleAnswer,
  ScaleOptions,
  TextAnswer,
} from '../../../types.ts';
import cn from 'classnames';
import { QuestionType } from '../../../const.ts';
import TextField from '../Answers/TextField/TextField.tsx';
import RadioField from '../Answers/RadioField/RadioField.tsx';
import CheckboxesField from '../Answers/CheckboxesField/CheckboxesField.tsx';
import ScaleField from '../Answers/ScaleField/ScaleField.tsx';

type QuestionCardProps = {
  question: Question;
  userAnswers: QuestionAnswer;
  onAnswerChanged: (answer: QuestionAnswer) => void;
};

const getQuestionField = (
  question: Question,
  userAnswer: QuestionAnswer,
  onAnswerChanged: (answer: QuestionAnswer) => void
) => {
  switch (question.type) {
    default:
    case QuestionType.Text:
      return (
        <TextField
          onAnswerChanged={onAnswerChanged}
          userAnswer={userAnswer as TextAnswer}
        />
      );
    case QuestionType.Radio:
      return (
        <RadioField
          options={question.options as RadioOptions}
          userAnswer={userAnswer as RadioAnswer}
          onAnswerChange={onAnswerChanged}
        />
      );
    case QuestionType.Checkbox:
      return (
        <CheckboxesField
          options={question.options as CheckboxOptions}
          userAnswer={userAnswer as CheckboxAnswer}
          onAnswerChange={onAnswerChanged}
        />
      );
    case QuestionType.Scale:
      return (
        <ScaleField
          options={question.options as ScaleOptions}
          userAnswer={userAnswer as ScaleAnswer}
          onAnswerChange={onAnswerChanged}
        />
      );
  }
};

export default function QuestionCard({
  question,
  userAnswers,
  onAnswerChanged,
}: QuestionCardProps) {
  return (
    <div className={styles.question}>
      <h2 className={cn(styles.title, question.isRequired && styles.required)}>
        {question.title}
      </h2>
      <div className={styles.questionField}>
        {getQuestionField(question, userAnswers, onAnswerChanged)}
      </div>
    </div>
  );
}
