import styles from "./PollCard.module.css";
import grammaImage from "./gramma.png";
import { IGramma } from "../../types.ts";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

type PollCardProps = {
  gramma: Pick<IGramma, "id" | "title" | "description">;
};

const PollCard = ({ gramma }: PollCardProps) => {
  return (
    <Link
      to={`/grammas/${gramma.id}`}
      style={{ textDecoration: "none", width: "350px", height: "240px" }}
    >
      <div className={styles.blockCard}>
        <img src={grammaImage} width={50} height={50} />
        <div className={styles.textHeading}>{gramma.title}</div>
        <div className={styles.textDescription}>
          {gramma.description.length > 70
            ? gramma.description.slice(0, 50) + "..."
            : gramma.description}
        </div>
      </div>
    </Link>
  );
};

export default observer(PollCard);
