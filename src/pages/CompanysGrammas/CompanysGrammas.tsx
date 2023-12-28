import styles from "./companys-grammas-page.module.css";
import { useEffect, useState } from "react";
import GrammasList from "../../components/GrammasList/GrammasList.tsx";
import { observer } from "mobx-react-lite";
import { useStores } from "../../rootStoreContext.ts";
import AnswersList from "../../components/AnswersList/AnswersList.tsx";

function CompanysGrammasPage() {
  const [showAnswers, setShowAnswers] = useState(false);
  const { grammaStore } = useStores();
  const grammasList = grammaStore.grammasList;

  useEffect(() => {
    grammaStore.getGrammasList();
  }, [grammaStore]);

  return (
    <>
      <div className={styles.grammasPage}>
        <GrammasList grammasList={grammasList} />
      </div>
        <div className={styles.answers}>
          <div className={styles.getAnswersBtn} onClick={() => setShowAnswers(true)}>Показать ответы</div>
            {showAnswers && <AnswersList onClick={() => setShowAnswers(false)} />}
        </div>
    </>
  );
}

export default observer(CompanysGrammasPage);
