import styles from "./companys-grammas-page.module.css";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../rootStoreContext.ts";
import GrammasListForManager from "../../components/GrammasList/GrammasListForManager.tsx";

function CompanysGrammasPage() {
  const { grammaStore } = useStores();
  const grammasList = grammaStore.grammasList;

  useEffect(() => {
    grammaStore.getGrammasListByCompany();
  }, []);

  return (
    <>
      <div className={styles.grammasPage}>
        <GrammasListForManager grammasList={grammasList} />
      </div>
    </>
  );
}

export default observer(CompanysGrammasPage);
