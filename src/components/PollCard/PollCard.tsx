import * as React from 'react';
import styles from './PollCard.module.css';

export interface Pollcard{
    name: string,
    description: string,
    dateFrom: string,
    dateTo: string
}

const PollCard = ({name, description, dateFrom, dateTo} : Pollcard) => {
    return (
        <a href={""} onClick={(e) => {e.preventDefault()}} className={styles.href}>
            <div className={styles.blockCard}>
                <div className={styles.textHeading}>{name}</div>
                <div className={styles.textDescription}>{description}</div>
                <div className={styles.textDescription}>{dateFrom} - {dateTo}</div>
            </div>
        </a>
    );
};

export default PollCard;
