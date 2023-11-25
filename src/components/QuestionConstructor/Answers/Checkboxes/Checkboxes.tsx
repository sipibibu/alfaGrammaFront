import styles from './checkboxes.module.css';
import CheckItem from './CheckItem.tsx';
import { useOptions } from '../../../../hooks/useOptions.ts';
import { CheckboxOptions } from '../../../../types.ts';

type CheckboxesProps = {
  options: CheckboxOptions;
  setOptions: (options: CheckboxOptions) => void;
};

export default function Checkboxes({ options, setOptions }: CheckboxesProps) {
  const setOptionsArray = useOptions(options, setOptions);

  return (
    <div className={styles.radioList}>
      {[...options, ''].map((option, i) => (
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
