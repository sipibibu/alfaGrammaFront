import styles from "./gramma-page.module.css";
import { getFormattedDateTime } from "../../utils.ts";
import { useContext, useEffect } from "react";
import { Context } from "../../main.tsx";
import { useParams } from "react-router";

export default function GrammaPage() {
  const { id } = useParams();
  const { store } = useContext(Context);
  const gramma = store.grammaCard;

  useEffect(() => {
    if (id) {
      const intId = parseInt(id);
      if (intId !== gramma.id) {
        store.getGramma(intId);
      }
    }
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{gramma.title}</h1> <h2>Какая-то ООО</h2>
      </div>
      <div className={styles.description}>
        <h2>Описание</h2>
        <p>{gramma.description}</p>
      </div>
      <div className={styles.menu}>
        <div className={styles.calendar}>
          <p>
            Начало:
            <span> {getFormattedDateTime(gramma.dateFrom)}</span>
          </p>
          <p>
            Конец:
            <span> {getFormattedDateTime(gramma.dateTo)}</span>
          </p>
        </div>
        <button>Записаться</button>
      </div>
    </div>
  );
}
