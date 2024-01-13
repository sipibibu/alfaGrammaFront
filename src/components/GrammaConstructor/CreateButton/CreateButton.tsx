import React from "react";
import { IGrammaConstructor } from "../../../types.ts";
import styles from "./create-button.module.css";
import { useStores } from "../../../rootStoreContext.ts";
import { validateConstructor } from "../../../utils/validation.ts";
import { useNavigate } from "react-router";

type CreateButtonProps = {
  gramma: IGrammaConstructor;
};

function CreateButton({ gramma }: CreateButtonProps) {
  const { grammaStore } = useStores();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (validateConstructor(gramma)) {
      await grammaStore.createGramma(gramma);
      navigate("/ourgrammas");
    }
  };

  return (
    <button className={styles.submit} type={"button"} onClick={handleSubmit}>
      Создать
    </button>
  );
}

export default React.memo(CreateButton);
