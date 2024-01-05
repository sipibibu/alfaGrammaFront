import styles from "./all-grammas-list-page.module.css";
import GrammasList from "../../components/GrammasList/GrammasList.tsx";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../rootStoreContext.ts";
import Sidebar from "../../components/Sidebar/Sidebar.tsx";

function AllGrammasListPage() {
  const { grammaStore } = useStores();
  const grammas = grammaStore.grammasList;
  const [search, setSearch] = useState<string>("");
  const onChangeSearch = (input: string) => {
    setSearch(input);
  };

  const filteredGramms = grammas.filter((gramm) => {
    return (gramm.title + gramm.description)
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  useEffect(() => {
    grammaStore.getGrammasList();
  }, [grammaStore]);

  return (
    <div className={styles.grammasPage}>
      <Sidebar search={search} onChangeSearch={onChangeSearch} />
      <GrammasList grammasList={filteredGramms} />
    </div>
  );
}

export default observer(AllGrammasListPage);
