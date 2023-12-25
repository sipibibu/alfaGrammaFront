import styles from "./all-grammas-list-page.module.css";
import GrammasList from "../../components/GrammasList/GrammasList.tsx";
import { useContext, useEffect } from "react";
import { Context } from "../../main.tsx";
import { observer } from "mobx-react-lite";

function AllGrammasListPage() {
  const { store } = useContext(Context);
  const grammas = store.grammasList;

  useEffect(() => {
    store.getGrammasList();
  }, [grammas]);

  return (
    <div className={styles.grammasPage}>
      <GrammasList grammasList={grammas} />
    </div>
  );
}

export default observer(AllGrammasListPage);
