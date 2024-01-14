import styles from "./companys-grammas-page.module.css";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../rootStoreContext.ts";
import GrammasListForManager from "../../components/GrammasList/GrammasListForManager.tsx";
import { Helmet } from "react-helmet";
import EmptyList from "../../components/EmptyList/EmptyList.tsx";

function CompanysGrammasPage() {
  const { grammaStore } = useStores();
  const grammasList = grammaStore.grammasList;

  useEffect(() => {
    grammaStore.getGrammasListByCompany();
  }, []);

  return (
    <>
      <Helmet>
        <title>Наши опросы</title>
      </Helmet>
      <div className={styles.grammasPage}>
        {grammasList.length > 0 ? (
          <GrammasListForManager grammasList={grammasList} />
        ) : (
          <EmptyList>Вы еще не создали ни одного опроса</EmptyList>
        )}
      </div>
    </>
  );
}

export default observer(CompanysGrammasPage);
