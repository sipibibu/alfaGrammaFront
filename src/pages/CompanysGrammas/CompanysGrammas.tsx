import styles from "./companys-grammas-page.module.css";
import { useEffect} from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../rootStoreContext.ts";
import GrammasListForManager from "../../components/GrammasList/GrammasListForManager.tsx";

function CompanysGrammasPage() {
  const { grammaStore} = useStores();
  const grammasList = grammaStore.grammasList;

  useEffect(() => {
    grammaStore.getGrammasList();
  }, [grammaStore]);

  return (
    <>
      <div className={styles.grammasPage}>
        <GrammasListForManager grammasList={grammasList}/>
      </div>
        {/*<div className={styles.answers}>*/}
        {/*  <div className={styles.getAnswersBtn} onClick={() => setShowAnswers(true)}>Показать ответы</div>*/}
        {/*    {showAnswers && <AnswersList onClick={() => setShowAnswers(false)} />}*/}
        {/*</div>*/}
    </>
  );
}

export default observer(CompanysGrammasPage);
