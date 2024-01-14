import styles from "./all-grammas-list-page.module.css";
import GrammasList from "../../components/GrammasList/GrammasList.tsx";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../rootStoreContext.ts";
import Sidebar from "../../components/Sidebar/Sidebar.tsx";
import { IInterest } from "../../types.ts";
import { WithoutInterest } from "../../const.ts";
import { Helmet } from "react-helmet";
import EmptyList from "../../components/EmptyList/EmptyList.tsx";

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
    <>
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <div className={styles.grammasPage}>
        <Sidebar
          search={search}
          onChangeSearch={onChangeSearch}
          interests={interests}
          interestId={interest}
          setInterestId={setInterest}
        />
        {grammas.length === 0 && (
          <EmptyList>
            Пока что нет новых опросов. Пожалуйста зайдите позже
          </EmptyList>
        )}
        {grammas.length !== 0 && filteredGramms.length === 0 ? (
          <EmptyList>По заданным параметрам ничего не найдено</EmptyList>
        ) : (
          <GrammasList grammasList={filteredGramms} />
        )}
      </div>
    </>
  );
}

export default observer(AllGrammasListPage);
