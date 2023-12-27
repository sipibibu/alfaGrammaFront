import styles from "./grammas-page.module.css";
import PollCard from "../PollCard/PollCard.tsx";
import { IGrammaForm } from "../../types.ts";

type GrammasListProps = {
  grammasList: IGrammaForm[];
};

export default function GrammasList({ grammasList }: GrammasListProps) {
  const chunkArray = (array: IGrammaForm[], chunkSize: number) => {
    const renderGrammas = []
    for (let index = 0; index < array.length; index += chunkSize){
      renderGrammas.push(array.slice(index, index + chunkSize))
    }
    return renderGrammas
  }

  return (
      <div className={styles.grammasList}>
      {chunkArray(grammasList, 4).map(grammas =>
          <div className={styles.grammas}>
          {
            grammas.map((gramma) =>
              <PollCard gramma={gramma}/>
            )
          }
          </div>
      )}
      </div>
  );
}
