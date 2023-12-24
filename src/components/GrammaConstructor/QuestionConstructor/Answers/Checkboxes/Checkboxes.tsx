import styles from "./checkboxes.module.css";
import CheckItem from "./CheckItem.tsx";
import React from "react";
import { CheckboxOptions } from "../../../../../types.ts";
import { useOptions } from "../../../../../hooks/useOptions.ts";

type CheckboxesProps = {
  options: CheckboxOptions;
  setOptions: (options: CheckboxOptions) => void;
};

function Checkboxes({ options, setOptions }: CheckboxesProps) {
  const setOptionsArray = useOptions(options, setOptions);

  return (
    <div className={styles.radioList}>
      {[...options, ""].map((option, i) => (
        <CheckItem
          value={option}
          index={i}
          onChange={setOptionsArray}
          key={i}
        />
      ))}
    </div>
  );
}

export default React.memo(Checkboxes);
