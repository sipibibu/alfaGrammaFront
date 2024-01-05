import styles from "./answers-list.module.css";
import { useStores } from "../../rootStoreContext.ts";
import { observer } from "mobx-react-lite";

type AnswerListProps = {
  onClick: () => void;
};

function AnswersList({ onClick }: AnswerListProps) {
  const { answersStore } = useStores();
  const grammaAnswers = answersStore.grammaAnswers;
  return (
    <div className={styles.answersPage}>
      <div className={styles.answersForm}>
        <div className={styles.answers}>
          {grammaAnswers.map((grammaAnswer) =>
            grammaAnswer.questions.map((answer) => (
              <>
                <h2>{answer?.question?.title}</h2>
                <p>{answer.text.toString()}</p>
              </>
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
