import styles from './radio.module.css';
import RadioItem from './RadioItem.tsx';
import { useOptions } from '../../../../hooks/useOptions.ts';
import { RadioOptions } from '../../../../types.ts';

type RadioProps = {
  options: RadioOptions;
  setOptions: (options: RadioOptions) => void;
};

export default function Radio({ options, setOptions }: RadioProps) {
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
