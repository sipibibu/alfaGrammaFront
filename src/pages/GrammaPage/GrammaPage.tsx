import styles from "./gramma-page.module.css";
import { useEffect } from "react";
import { useParams } from "react-router";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { useStores } from "../../rootStoreContext.ts";

function GrammaPage() {
  const { id } = useParams();
  const { grammaStore } = useStores();
  const gramma = grammaStore.grammaCard;

  useEffect(() => {
    if (id) {
      const intId = parseInt(id);
      if (intId !== gramma.id) {
        grammaStore.getGramma(intId);
      }
    }
  }, [id]);

  if (!id || gramma.id !== parseInt(id)) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{gramma.title}</h1> <h2>{gramma.companyName}</h2>
      </div>
      <div className={styles.description}>
        <h2>Описание</h2>
        <p>{gramma.description}</p>
      </div>
      <div className={styles.menu}>
        <div className={styles.calendar}>
          <p>
            Начало:
            {/*<span> {getFormattedDateTime(gramma.dateFrom)}</span>*/}
            <span>24.12.2023, 00:00</span>
          </p>
          <p>
            Конец:
            {/*<span> {getFormattedDateTime(gramma.dateTo)}</span>*/}
            <span>30.12.2023, 00:00</span>
          </p>
        </div>
        <Link to={`/gramma-form/${gramma.id}`}>
          <button>Пройти</button>
        </Link>
      </div>
    </div>
  );
}

export default observer(GrammaPage);
