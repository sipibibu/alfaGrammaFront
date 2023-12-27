import styles from "./planned-grammas-page.module.css";
import { useContext, useEffect } from "react";
import { Context } from "../../main.tsx";
import GrammasList from "../../components/GrammasList/GrammasList.tsx";
import { observer } from "mobx-react-lite";

function PlannedGrammasPage() {
  const { store } = useContext(Context);
  const grammasList = store.grammasList;

  useEffect(() => {
    store.getPlannedGrammas();
  }, []);

  return (
    <div className={styles.grammasPage}>
      <GrammasList grammasList={grammasList} />
    </div>
  );
}

export default observer(PlannedGrammasPage);
