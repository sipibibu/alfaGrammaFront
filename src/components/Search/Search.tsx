import * as React from 'react';
import styles from './Search.module.css';

const Search = ({search, onChangeSearch}) => {
    return (
        <div className={styles.blockSearch}>
            <input placeholder={"Поиск"} className={styles.inputSearch}
                   value={search}
                   onChange={e => onChangeSearch(e.target.value)}
            />
        </div>
    );
};

export default Search;
