import styles from "./Search.module.css";

type searchProps = {
  search: string;
  onChangeSearch: (input: string) => void;
};

const Search = ({ search, onChangeSearch }: searchProps) => {
  return (
    <div className={styles.blockSearch}>
      <input
        placeholder={"Поиск"}
        className={styles.inputSearch}
        value={search}
        onChange={(e) => onChangeSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
