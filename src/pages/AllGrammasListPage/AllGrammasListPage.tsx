import styles from "./all-grammas-list-page.module.css";
import GrammasList from "../../components/GrammasList/GrammasList.tsx";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../main.tsx";
import { observer } from "mobx-react-lite";
import Search from "../../components/Search/Search.tsx";
import Selector from "../../components/Selector/Selector.tsx";

function AllGrammasListPage() {
  const { store } = useContext(Context);
  const grammas = store.grammasList;
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
    store.getGrammasList();
  }, []);

  return (
    <div className={styles.grammasPage}>
      <div className={styles.sidebar}>
        <Search search={search} onChangeSearch={onChangeSearch} />
        <Selector />
      </div>
      <div className={styles.list}>
        <GrammasList grammasList={filteredGramms} />
      </div>
    </div>
  );
}

export default observer(AllGrammasListPage);
