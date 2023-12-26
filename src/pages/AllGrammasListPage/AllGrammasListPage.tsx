import styles from "./all-grammas-list-page.module.css";
import GrammasList from "../../components/GrammasList/GrammasList.tsx";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import {useStores} from "../../rootStoreContext.ts";

function AllGrammasListPage() {
  const { grammaStore } = useStores();
  const grammas = grammaStore.grammasList;

  useEffect(() => {
    grammaStore.getGrammasList();
  }, [grammas]);

  return (
    <div className={styles.grammasPage}>
      <GrammasList grammasList={grammas} />
    </div>
  );
}

export default observer(AllGrammasListPage);
