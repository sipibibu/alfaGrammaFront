import styles from './question-card.module.css';
import {
  CheckboxAnswer,
  CheckboxOptions,
  Question,
  QuestionAnswer,
  RadioOptions,
  ScaleAnswer,
  ScaleOptions,
  TextAnswer,
} from '../../../types.ts';
import cn from 'classnames';
import { QuestionType } from '../../../const.ts';
import Text from '../../QuestionConstructor/Answers/Text/Text.tsx';
import Radio from "../../QuestionConstructor/Answers/Radio/Radio.tsx";
import Checkboxes from '../../QuestionConstructor/Answers/Checkboxes/Checkboxes.tsx';
import Scale from "../../QuestionConstructor/Answers/Scale/Scale.tsx";

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
        <Text
          onAnswerChanged={onAnswerChanged}
          userAnswer={userAnswer as TextAnswer}
        />
      );
    case QuestionType.Radio:
      return (
        <Radio
          options={question.options as RadioOptions}
          userAnswer={userAnswer as TextAnswer}
          onAnswerChange={onAnswerChanged}
        />
      );
    case QuestionType.Checkbox:
      return (
        <Checkboxes
          options={question.options as CheckboxOptions}
          userAnswer={userAnswer as CheckboxAnswer}
          onAnswerChange={onAnswerChanged}
        />
      );
    case QuestionType.Scale:
      return (
        <Scale
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
