import React, { useContext } from "react";
import { IGrammaStructure } from "../../../types.ts";
import styles from "./create-button.module.css";
import { Context } from "../../../main.tsx";

type CreateButtonProps = {
  gramma: IGrammaStructure;
};

function CreateButton({ gramma }: CreateButtonProps) {
  const { store } = useContext(Context);
  const handleSubmit = () => {
    store.createGramma(gramma);
  };

  return (
    <button className={styles.submit} type={"button"} onClick={handleSubmit}>
      Создать
    </button>
  );
}

export default React.memo(CreateButton);
