import React from "react";
import { IGrammaConstructor } from "../../../types.ts";
import styles from "./create-button.module.css";
import { useStores } from "../../../rootStoreContext.ts";
import { validateConstructor } from "../../../utils/validation.ts";

type CreateButtonProps = {
  gramma: IGrammaConstructor;
};

function CreateButton({ gramma }: CreateButtonProps) {
  const { grammaStore } = useStores();
  const handleSubmit = () => {
    if (validateConstructor(gramma)) {
      grammaStore.createGramma(gramma);
    }
  };

  return (
    <button className={styles.submit} type={"button"} onClick={handleSubmit}>
      Создать
    </button>
  );
}

export default React.memo(CreateButton);
