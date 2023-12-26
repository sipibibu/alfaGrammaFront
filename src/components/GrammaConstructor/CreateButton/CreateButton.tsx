import React from "react";
import { IGrammaStructure } from "../../../types.ts";
import styles from "./create-button.module.css";
import { useStores } from "../../../rootStoreContext.ts";

type CreateButtonProps = {
  gramma: IGrammaStructure;
};

function CreateButton({ gramma }: CreateButtonProps) {
  const { grammaStore } = useStores();
  const handleSubmit = () => {
    grammaStore.createGramma(gramma);
  };

  return (
    <button className={styles.submit} type={"button"} onClick={handleSubmit}>
      Создать
    </button>
  );
}

export default React.memo(CreateButton);
