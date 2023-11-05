import * as React from 'react';
import styles from './Selector.module.css';

const Selector = () => {
    return (
        <div className={styles.radioList}>
            <div className={styles.radioItem}>
                <input name="radio" id="radio1" type="radio" value={"1"}/>
                <label htmlFor="radio1">Все опросы</label>
            </div>
            <div className={styles.radioItem}>
                <input name="radio" id="radio2" type="radio" value={"2"}/>
                <label htmlFor="radio2">По навыкам</label>
            </div>
            <div className={styles.radioItem}>
                <input name="radio" id="radio3" type="radio" value={"3"}/>
                <label htmlFor="radio3">По компаниям</label>
            </div>
        </div>
    );
};

export default Selector;
