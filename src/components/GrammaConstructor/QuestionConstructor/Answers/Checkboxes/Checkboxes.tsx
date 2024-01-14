import styles from "./checkboxes.module.css";
import CheckItem from "./CheckItem.tsx";
import React from "react";
import { IAnswerVariants } from "../../../../../types.ts";
import { useOptions } from "../../../../../hooks/useOptions.ts";

type CheckboxesProps = {
  options: IAnswerVariants;
  setOptions: (options: IAnswerVariants) => void;
  disabled?: boolean;
};

function Checkboxes({ options, setOptions, disabled }: CheckboxesProps) {
  const setOptionsArray = useOptions(options, setOptions);

  return (
    <div className={styles.radioList}>
      {(disabled ? [...options] : [...options, { text: "" }]).map(
        (option, i) => (
          <CheckItem
            value={option.text}
            index={i}
            onChange={setOptionsArray}
            key={i}
            disabled={disabled}
          />
        ),
      )}
    </div>
  );
}

export default React.memo(Checkboxes);
