import styles from './radio.module.css';
import RadioItem from './RadioItem.tsx';
import { useOptions } from '../../../../hooks/useOptions.ts';
import { RadioOptions } from '../../../../types.ts';
import React from 'react';

type RadioProps = {
  options: RadioOptions;
  setOptions: (options: RadioOptions) => void;
};

function Radio({ options, setOptions }: RadioProps) {
  const setOptionsArray = useOptions(options, setOptions);

  return (
    <div className={styles.radioList}>
      {[...options, ''].map((variant, i) => (
        <RadioItem
          value={variant}
          index={i}
          onChange={setOptionsArray}
          key={i}
        />
      ))}
    </div>
  );
}

export default React.memo(Radio);
