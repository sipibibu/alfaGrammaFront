import React from "react";
import styles from "./submit-button.module.css";
import { IQuestionAnswer } from "../../../types.ts";
import { useStores } from "../../../rootStoreContext.ts";

type SubmitButtonProps = {
  grammaId: number;
  answers: IQuestionAnswer[];
};

function SubmitButton({ grammaId, answers }: SubmitButtonProps) {
  const { answersStore } = useStores();
  const handleSubmit = () => {
    answersStore.sendAnswers({ grammaId, answers });
  };

  return (
    <button className={styles.submit} type={"button"} onClick={handleSubmit}>
      Отправить
    </button>
  );
}

export default React.memo(SubmitButton);
