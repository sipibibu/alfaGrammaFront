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
    <div className={styles.answers}>
      {grammaAnswers.map((grammaAnswer) =>
        grammaAnswer.answers.map((answer) => (
          <div>{answer.answer.toString()}</div>
        )),
      )}
      <button onClick={onClick} type={"button"}>
        Закрыть
      </button>
    </div>
  );
}

export default observer(AnswersList);
