import styles from "./question-card.module.css";
import {
  ICheckboxAnswer,
  CheckboxOptions,
  IQuestion,
  IQuestionAnswer,
  IRadioAnswer,
  RadioOptions,
  IScaleAnswer,
  ScaleOptions,
  ITextAnswer,
} from "../../../types.ts";
import cn from "classnames";
import { QuestionType } from "../../../const.ts";
import TextField from "../Answers/TextField/TextField.tsx";
import RadioField from "../Answers/RadioField/RadioField.tsx";
import CheckboxesField from "../Answers/CheckboxesField/CheckboxesField.tsx";
import ScaleField from "../Answers/ScaleField/ScaleField.tsx";

type QuestionCardProps = {
  question: IQuestion;
  userAnswers: IQuestionAnswer;
  onAnswerChanged: (answer: IQuestionAnswer) => void;
};

const getQuestionField = (
  question: IQuestion,
  userAnswer: IQuestionAnswer,
  onAnswerChanged: (answer: IQuestionAnswer) => void,
) => {
  switch (question.type) {
    default:
    case QuestionType.Text:
      return (
        <TextField
          onAnswerChanged={onAnswerChanged}
          userAnswer={userAnswer as ITextAnswer}
        />
      );
    case QuestionType.Radio:
      return (
        <RadioField
          options={question.options as RadioOptions}
          userAnswer={userAnswer as IRadioAnswer}
          onAnswerChange={onAnswerChanged}
        />
      );
    case QuestionType.Checkbox:
      return (
        <CheckboxesField
          options={question.options as CheckboxOptions}
          userAnswer={userAnswer as ICheckboxAnswer}
          onAnswerChange={onAnswerChanged}
        />
      );
    case QuestionType.Scale:
      return (
        <ScaleField
          options={question.options as ScaleOptions}
          userAnswer={userAnswer as IScaleAnswer}
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
