import styles from "./planned-grammas-page.module.css";
import { useEffect } from "react";
import GrammasList from "../../components/GrammasList/GrammasList.tsx";
import { observer } from "mobx-react-lite";
import { useStores } from "../../rootStoreContext.ts";

function PlannedGrammasPage() {
  const { grammaStore } = useStores();
  const grammasList = grammaStore.grammasList;

  useEffect(() => {
    grammaStore.getPlannedGrammasList();
  }, []);

  return (
    <div className={styles.grammasPage}>
      <GrammasList grammasList={grammasList} />
    </div>
  );
}

export default observer(PlannedGrammasPage);
