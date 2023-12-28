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
  }, []);

  return (
    <>
      {showAnswers && <AnswersList onClick={() => setShowAnswers(false)} />}
      <div className={styles.grammasPage}>
        <GrammasList grammasList={grammasList} />
      </div>
      <div onClick={() => setShowAnswers(true)}>Показать ответы</div>
    </>
  );
}

export default observer(CompanysGrammasPage);
