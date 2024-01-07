import styles from "./answers-list.module.css";
import { useStores } from "../../rootStoreContext.ts";
import { observer } from "mobx-react-lite";
import {ICheckboxAnswer, IQuestion, IUserResponse} from "../../types.ts";

type AnswerListProps = {
  onClick: () => void;
};

const createDictionaryFromQuestionsAndAnswers = (grammasList: IUserResponse[]) => {
  const dictQuestionsAnswers = new Map<IQuestion, string | number | ICheckboxAnswer>
  for (let grammas of grammasList){
    for (let gramma of grammas.questions){
      if(gramma.question?.type != undefined && gramma.question?.title != undefined) {
        dictQuestionsAnswers.set({
          title: gramma.question.title,
          type: gramma.question.type,
          isRequired: gramma.question.isRequired,
          options: gramma.question.options
        }, gramma.text)
      }
    }
  }
  console.log(dictQuestionsAnswers)
}

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
