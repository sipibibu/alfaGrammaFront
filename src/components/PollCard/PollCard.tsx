import * as React from 'react';
import styles from './PollCard.module.css';

const PollCard = () => {
    return (
        <div className={styles.blockCard}>
            <div className={styles.textHeading}>Опрос № 1</div>
            <div className={styles.textDescription}>Issues with your BotGhost or Discord account</div>
        </div>
    );
};

export default PollCard;
