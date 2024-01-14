import styles from "./planned-grammas-page.module.css";
import { useEffect } from "react";
import GrammasList from "../../components/GrammasList/GrammasList.tsx";
import { observer } from "mobx-react-lite";
import { useStores } from "../../rootStoreContext.ts";
import { Helmet } from "react-helmet";
import EmptyList from "../../components/EmptyList/EmptyList.tsx";

function PlannedGrammasPage() {
  const { grammaStore } = useStores();
  const grammasList = grammaStore.grammasList;

  useEffect(() => {
    grammaStore.getPlannedGrammasList();
  }, []);

  return (
    <div className={styles.grammasPage}>
      <Helmet>
        <title>Запланированные опросы</title>
      </Helmet>
      {grammasList.length > 0 ? (
        <GrammasList grammasList={grammasList} />
      ) : (
        <EmptyList>
          Здесь пока ничего нет. Запланируйте прохождение опроса и он
          отобразится здесь
        </EmptyList>
      )}
    </div>
  );
}

export default observer(PlannedGrammasPage);
