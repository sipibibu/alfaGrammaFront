import styles from "./PollCard.module.css";
import grammaImage from "./gramma.png";
import { IGramma } from "../../types.ts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";

type PollCardProps = {
  gramma: Pick<IGramma, "id" | "title" | "description">;
};

const PollCardForManager = ({ gramma }: PollCardProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles.blockCard}>
      <img src={grammaImage} width={50} height={50} />
      <div className={styles.textHeading}>{gramma.title}</div>
      <div className={styles.textDescription}>
        {gramma.description.length > 70
          ? gramma.description.slice(0, 50) + "..."
          : gramma.description}
      </div>
      <div className={styles.buttons}>
        <button onClick={() => navigate(`/ourgrammas/answers/${gramma.id}`)}>
          Ответы
        </button>
        <button onClick={() => navigate(`/ourgrammas/form/${gramma.id}`)}>
          Форма
        </button>
      </div>
    </div>
  );
};

export default observer(PollCardForManager);
