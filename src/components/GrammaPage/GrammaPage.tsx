import styles from './gramma-page.module.css';
import { getFormattedDateTime } from '../../utils.ts';

const dateFrom = '2023-01-02T12:00:00';
const dateTo = '2023-01-15T12:00:00';
const description =
  'Lorem ipsum dolor sit amet, consectetur libero vel elementum. Curabitur vel tellus nec dolor iaculis posuere sit amet vitae neque. Suspendisse nunc ante, placerat id ipsum at, faucibus fermentum lacus.';

export default function GrammaPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Опрос №1</h1> <h2>Какая-то ООО</h2>
      </div>
      <div className={styles.description}>
        <h2>Описание</h2>
        <p>{description}</p>
      </div>
      <div className={styles.menu}>
        <div className={styles.calendar}>
          <p>
            Начало:
            <span> {getFormattedDateTime(dateFrom)}</span>
          </p>
          <p>
            Конец:
            <span> {getFormattedDateTime(dateTo)}</span>
          </p>
        </div>
        <button>Записаться</button>
      </div>
    </div>
  );
}
