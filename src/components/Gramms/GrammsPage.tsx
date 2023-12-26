import styles from './GrammsPage.module.css';
import Search from '../Search/Search';
import Selector from '../Selector/Selector';
import PollCard from "../PollCard/PollCard";
import { gramms } from "../../const/mock.ts";
import { useState } from "react";

const GrammsPage = () => {
  const [search, setSearch] = useState<string>('')
  const onChangeSearch = (input: string) => {
      setSearch(input)
  }

  const filteredGramms = gramms.filter(gramm => {
      return (gramm.name + gramm.description).toLowerCase().includes(search.toLowerCase())
  })

  return (
      <div style={{display: "flex", flexDirection: "row", gap: "90px"}}>
          <div className={styles.sidebar}>
              <Search search={search} onChangeSearch={onChangeSearch}/>
              <Selector />
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: "38px"}}>
              <div style={{display: "flex", flexDirection: "row", gap: "38px", marginTop: "112px"}}>
                  {
                      filteredGramms.slice(0, 3).map((gramm) =>
                      <PollCard
                          name={gramm.name}
                          description={gramm.description}
                          dateFrom={gramm.dateFrom}
                          dateTo={gramm.dateTo}
                      />
                      )
                  }
              </div>
              <div style={{display: "flex", flexDirection: "row", gap: "38px"}}>
                  {
                      filteredGramms.slice(3, 6).map((gramm) =>
                          <PollCard
                              name={gramm.name}
                              description={gramm.description}
                              dateFrom={gramm.dateFrom}
                              dateTo={gramm.dateTo}
                          />
                      )
                  }
              </div>
          </div>
      </div>
  );
};
// gramms with state in mobx
export default GrammsPage;
