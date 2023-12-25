import styles from "./PollCard.module.css";
import grammaImage from "./gramma.png";
import { IGrammaForm } from "../../types.ts";
import { Link } from "react-router-dom";

type PollCardProps = {
  gramma: Pick<IGrammaForm, "id" | "title" | "description">;
};

const PollCard = ({ gramma }: PollCardProps) => {
  return (
    <Link to={`/grammas/${gramma.id}`} style={{ textDecoration: "none" }}>
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

export default PollCard;
