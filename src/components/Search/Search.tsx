import * as React from 'react';
import styles from './Search.module.css';
import search from './Rectangle 122.svg';
import {useState} from "react";

const Search = () => {
    const [searchText, setSearchText] = useState('')
    return (
        <div className={styles.blockSearch}>
            <input placeholder={"Поиск"} className={styles.inputSearch}
                   value={searchText}
                   onChange={e => setSearchText(e.target.value)}
            />
            <a href={""}><img src={search} alt={"поиск"} className={styles.imgSearch}/></a>
        </div>
    );
};

export default Search;
