import styles from "./question-card-manager.module.css";
import {
  ICheckboxAnswer,
  IQuestion,
  IQuestionAnswer,
  IQuestionWithId,
  IRadioAnswer,
  IScaleAnswer,
  ITextAnswer,
} from "../../../types.ts";
import cn from "classnames";
import { QuestionType } from "../../../const.ts";
import TextFieldManager from "../AnswerManager/TextFieldManager/TextFieldManager.tsx";
import RadioFieldManager from "../AnswerManager/RadioFieldManager/RadioFieldManger.tsx";
import CheckboxesFieldManager from "../AnswerManager/CheckboxesFieldManager/CheckboxesFieldManager.tsx";
import ScaleFieldManager from "../AnswerManager/ScaleFieldManager/ScaleFieldManager.tsx";

type QuestionCardProps = {
  question: IQuestionWithId;
  userAnswer: IQuestionAnswer["text"];
};

const getQuestionField = (
  question: IQuestion,
  userAnswer: IQuestionAnswer["text"],
) => {
  switch (question.type) {
    default:
    case QuestionType.Text:
      return (
        <TextFieldManager
          userAnswer={userAnswer as ITextAnswer}
        />
      );
    case QuestionType.Radio:
      return (
        <RadioFieldManager
          options={question.options}
          userAnswer={userAnswer as IRadioAnswer}
        />
      );
    case QuestionType.Checkbox:
      return (
        <CheckboxesFieldManager
          options={question.options}
          userAnswer={userAnswer as ICheckboxAnswer}
        />
      );
    case QuestionType.Scale:
      return (
        <ScaleFieldManager
          options={question.options}
          userAnswer={userAnswer as IScaleAnswer}
        />
      );
  }
};

export default function QuestionCardManager({
  question,
  userAnswer,
}: QuestionCardProps) {
  return (
    <div className={styles.question}>
      <h2 className={cn(styles.title, question.isRequired && styles.required)}>
        {question.title}
      </h2>
      <div className={styles.questionField}>
        {getQuestionField(question, userAnswer)}
      </div>
    </div>
  );
}
