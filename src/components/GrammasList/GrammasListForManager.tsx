import styles from "./grammas-list.module.css";
import { IGramma } from "../../types.ts";
import PollCardForManager from "../PollCard/PollCardForManager.tsx";

type GrammasListProps = {
  grammasList: IGramma[];
};

export default function GrammasListForManager({
  grammasList,
}: GrammasListProps) {
  return (
    <div className={styles.grammas}>
      {grammasList.map((gramma) => (
        <PollCardForManager gramma={gramma} key={gramma.id} />
      ))}
    </div>
  );
}
