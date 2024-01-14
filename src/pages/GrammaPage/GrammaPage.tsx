import styles from "./gramma-page.module.css";
import {useEffect, useState} from "react";
import { useParams } from "react-router";
import { observer } from "mobx-react-lite";
import { useStores } from "../../rootStoreContext.ts";
import { getFormattedDateTime } from "../../utils.ts";
import { Helmet } from "react-helmet";
import Loading from "../../components/Loading/Loading.tsx";
import {Link} from "react-router-dom";

function GrammaPage() {
  const { id } = useParams();
  const { grammaStore } = useStores();
  const gramma = grammaStore.grammaCard;
  const [isSubscribe, setIsSubscribe] = useState(
      id ?
          grammaStore.subscribingGrammasIds.includes(parseInt(id))
          :
          false
  )

  useEffect(() => {
    if (id) {
      const intId = parseInt(id);
      if (intId !== gramma.id) {
        grammaStore.getGramma(intId);
      }
    }
  }, [id]);

  if (!id || gramma.id !== parseInt(id)) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Опрос "{gramma.title}"</title>
      </Helmet>
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
            <span> {getFormattedDateTime(gramma.dateFrom)}</span>
          </p>
          <p>
            Конец:
            <span> {getFormattedDateTime(gramma.dateTo)}</span>
          </p>
        </div>
        <div className={styles.buttons}>
          {
            isSubscribe ?
                <button onClick={() => {
                  grammaStore.unSubscribeToGramma(parseInt(id)).then((res) => {
                    res ? setIsSubscribe(false) : setIsSubscribe(true)
                  });
                }}>Отписаться</button>
                :
                <button onClick={() => {
                  grammaStore.subscribeToGramma(parseInt(id)).then((res) => {
                    res ? setIsSubscribe(true) : setIsSubscribe(false)
                  });
                }}>Записаться</button>
          }
          { isSubscribe && new Date() <= new Date(gramma.dateTo) && new Date() >= new Date(gramma.dateFrom) ?
              <Link to={`/gramma-form/${gramma.id}`}>
                <button>Пройти</button>
              </Link>
              :
              null
          }
        </div>
      </div>
    </div>
  );
}

export default observer(GrammaPage);
