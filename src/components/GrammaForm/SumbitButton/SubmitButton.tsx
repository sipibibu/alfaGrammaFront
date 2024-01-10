import React from "react";
import styles from "./submit-button.module.css";
import { IQuestionAnswer, IQuestionWithId } from "../../../types.ts";
import { useStores } from "../../../rootStoreContext.ts";
import { validateAnswers } from "../../../utils/validation.ts";
import { useNavigate } from "react-router";

type SubmitButtonProps = {
  grammaId: number;
  answers: IQuestionAnswer[];
  questions: IQuestionWithId[];
};

function SubmitButton({ grammaId, answers, questions }: SubmitButtonProps) {
  const { answersStore } = useStores();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (validateAnswers(answers, questions)) {
      answersStore.sendAnswers(answers, grammaId);
      navigate("/grammas");
    }
  };

  return (
    <button className={styles.submit} type={"button"} onClick={handleSubmit}>
      Отправить
    </button>
  );
}

export default React.memo(SubmitButton);
