import { IAnswerVariants } from "../../../../../types.ts";
import styles from "./radio.module.css";
import RadioItem from "./RadioItem.tsx";
import React from "react";
import { useOptions } from "../../../../../hooks/useOptions.ts";

type RadioProps = {
  options: IAnswerVariants;
  setOptions: (options: IAnswerVariants) => void;
  disabled?: boolean;
};

function Radio({ options, setOptions, disabled }: RadioProps) {
  const setOptionsArray = useOptions(options, setOptions);

  return (
    <div className={styles.radioList}>
      {(disabled ? [...options] : [...options, { text: "" }]).map(
        (variant, i) => (
          <RadioItem
            value={variant.text}
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

export default React.memo(Radio);
