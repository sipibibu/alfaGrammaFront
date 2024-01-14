import styles from "./gramma-form.module.css";
import { useEffect, useMemo } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import { useStores } from "../../rootStoreContext.ts";
import AnswersList from "./AnswersList/AnswersList.tsx";
import { createDictQuestionsAnswers } from "../../utils/answers.ts";
import { Helmet } from "react-helmet";
import Loading from "../Loading/Loading.tsx";

function GrammaAnswers() {
  const { id } = useParams();
  const { grammaStore, answersStore } = useStores();
  const grammaForm = grammaStore.grammaForm;
  const gramaAnswers = answersStore.grammaAnswers;

  useEffect(() => {
    if (id) {
      const intId = parseInt(id);
      grammaStore.getGrammaForm(intId);
      answersStore.getGrammaAnswers(intId);
    }
  }, [id]);

  const answersDict = useMemo(
    () => createDictQuestionsAnswers(answersStore.grammaAnswers),
    [gramaAnswers],
  );

  if (
    !grammaForm ||
    !grammaForm.id ||
    !answersDict ||
    grammaForm.id !== parseInt(id as string)
  ) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Ответы на опрос "{grammaForm.title}"</title>
      </Helmet>
      <h1 className={styles.title}>{grammaForm.title}</h1>
      <p className={styles.description}>{grammaForm.description}</p>
      <AnswersList questions={grammaForm.questions} dictAnswers={answersDict} />
    </div>
  );
}

export default observer(GrammaAnswers);
