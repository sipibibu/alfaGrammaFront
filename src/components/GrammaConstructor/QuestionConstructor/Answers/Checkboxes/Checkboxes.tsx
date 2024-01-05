import styles from "./checkboxes.module.css";
import CheckItem from "./CheckItem.tsx";
import React from "react";
import { IAnswerVariants } from "../../../../../types.ts";
import { useOptions } from "../../../../../hooks/useOptions.ts";

type CheckboxesProps = {
  options: IAnswerVariants;
  setOptions: (options: IAnswerVariants) => void;
};

function Checkboxes({ options, setOptions }: CheckboxesProps) {
  const setOptionsArray = useOptions(options, setOptions);

  return (
    <div className={styles.radioList}>
      {[...options, { text: "" }].map((option, i) => (
        <CheckItem
          value={option.text}
          index={i}
          onChange={setOptionsArray}
          key={i}
        />
      ))}
    </div>
  );
}

export default React.memo(Checkboxes);
