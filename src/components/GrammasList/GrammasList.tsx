import styles from "./grammas-list.module.css";
import PollCard from "../PollCard/PollCard.tsx";
import { IGrammaForm } from "../../types.ts";

type GrammasListProps = {
  grammasList: IGrammaForm[];
};

export default function GrammasList({ grammasList }: GrammasListProps) {
  return (
    <div className={styles.grammas}>
      {grammasList.map((gramma) => (
        <PollCard gramma={gramma} />
      ))}
    </div>
  );
}
