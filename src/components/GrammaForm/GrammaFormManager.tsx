import styles from "./gramma-form.module.css";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import { useStores } from "../../rootStoreContext.ts";
import QuestionsList from "../GrammaConstructor/QuestionConstructor/QuestionsList/QuestionsList.tsx";
import { Helmet } from "react-helmet";
import Loading from "../Loading/Loading.tsx";

function GrammaFormManager() {
  const { id } = useParams();
  const { grammaStore } = useStores();
  const grammaForm = grammaStore.grammaForm;

  useEffect(() => {
    if (id) {
      const intId = parseInt(id);
      grammaStore.getGrammaForm(intId);
    }
  }, [id]);
  if (
    !grammaForm ||
    !grammaForm.id ||
    grammaForm.id !== parseInt(id as string)
  ) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Форма опроса "{grammaForm.title}"</title>
      </Helmet>
      <h1 className={styles.title}>{grammaForm.title}</h1>
      <p className={styles.description}>{grammaForm.description}</p>
      <QuestionsList
        questionsList={grammaForm.questions}
        questionsChange={() => {}}
        disabled
      />
    </div>
  );
}

export default observer(GrammaFormManager);
