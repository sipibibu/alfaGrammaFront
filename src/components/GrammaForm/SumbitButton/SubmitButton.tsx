import React from "react";
import styles from "./submit-button.module.css";
import { IQuestionAnswer } from "../../../types.ts";

type SubmitButtonProps = {
  answers: IQuestionAnswer[];
};

function SubmitButton({ answers }: SubmitButtonProps) {
  const handleSubmit = () => {
    console.log({ answers });
  };

  return (
    <button className={styles.submit} type={"button"} onClick={handleSubmit}>
      Отправить
    </button>
  );
}

export default React.memo(SubmitButton);
