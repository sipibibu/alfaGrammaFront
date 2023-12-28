import styles from "./companys-grammas-page.module.css";
import { useEffect } from "react";
import GrammasList from "../../components/GrammasList/GrammasList.tsx";
import { observer } from "mobx-react-lite";
import { useStores } from "../../rootStoreContext.ts";

function CompanysGrammasPage() {
  const { grammaStore, userStore } = useStores();
  const grammasList = grammaStore.grammasList;
  console.log(userStore);

  useEffect(() => {
    grammaStore.getCompanysGrammasList();
  }, []);

  return (
    <div className={styles.grammasPage}>
      <GrammasList grammasList={grammasList} />
    </div>
  );
}

export default observer(CompanysGrammasPage);
