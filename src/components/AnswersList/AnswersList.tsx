import styles from "./answers-list.module.css";
import { useStores } from "../../rootStoreContext.ts";
import { observer } from "mobx-react-lite";
import {useEffect} from "react";

type AnswerListProps = {
  onClick: () => void;
};

function AnswersList({ onClick }: AnswerListProps) {
  const { answersStore, grammaStore } = useStores();
  const grammaAnswers = answersStore.grammaAnswers;
  useEffect(() => {
    answersStore.getGrammaAnswers(1);
  }, [answersStore]);
  console.log(grammaAnswers)
  return (
      <div className={styles.answersPage}>
    <div className={styles.answersForm}>
      <div className={styles.answers}>
        {grammaAnswers.map((grammaAnswer) =>
          grammaAnswer.questions.map((answer) => (
            <p>{`${answer.text.toString()} \n`}</p>
          )),
        )}
      </div>
      <button className={styles.answerBtn} onClick={onClick} type={"button"}>
                  Закрыть
      </button>
    </div>
      </div>
  );
}

export default observer(AnswersList);
