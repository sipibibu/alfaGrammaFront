import styles from "./grammas-list.module.css";
import PollCard from "../PollCard/PollCard.tsx";
import { IGramma } from "../../types.ts";

type GrammasListProps = {
  grammasList: IGramma[];
};

export default function GrammasList({ grammasList }: GrammasListProps) {
  return (
    <div className={styles.grammas}>
      {grammasList.map((gramma) => (
        <PollCard gramma={gramma} key={gramma.id} />
      ))}
    </div>
  );
}
