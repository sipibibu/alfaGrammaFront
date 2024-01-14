import styles from "./all-grammas-list-page.module.css";
import GrammasList from "../../components/GrammasList/GrammasList.tsx";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../rootStoreContext.ts";
import Sidebar from "../../components/Sidebar/Sidebar.tsx";
import { IInterest } from "../../types.ts";

const WithoutInterest = {
  id: 0,
  name: "Не выбрано",
} as IInterest;

function AllGrammasListPage() {
  const { grammaStore } = useStores();
  const grammas = grammaStore.grammasList;
  const interests = grammaStore.interests;
  const [search, setSearch] = useState("");
  const [interest, setInterest] = useState<IInterest>(WithoutInterest);

  const onChangeSearch = (input: string) => {
    setSearch(input);
  };

  const filteredGramms = grammas.filter((gramm) => {
    return (
      (gramm.title + gramm.description)
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (gramm.interests.includes(interest.id) || interest.id === 0)
    );
  });

  useEffect(() => {
    grammaStore.getGrammasList();
    grammaStore.getInterests();
  }, [grammaStore]);

  return (
    <div className={styles.grammasPage}>
      <Sidebar
        search={search}
        onChangeSearch={onChangeSearch}
        interests={[WithoutInterest, ...interests]}
        interestId={interest}
        setInterestId={setInterest}
      />
      <GrammasList grammasList={filteredGramms} />
    </div>
  );
}

export default observer(AllGrammasListPage);
