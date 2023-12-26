import styles from "../gramma-constructor.module.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SampleTitles, SampleVariants } from "../../../utils/gramma_samples.ts";

type SamplesSelectProps = {
  onChange: (sample: keyof typeof SampleVariants) => void;
};

export default function SamplesSelect({ onChange }: SamplesSelectProps) {
  return (
    <FormControl sx={{ width: "100%" }} className={styles.sample}>
      <InputLabel>Шаблон опроса</InputLabel>
      <Select
        defaultValue={SampleVariants.EMPTY}
        onChange={(event) =>
          onChange(event.target.value as keyof typeof SampleVariants)
        }
        autoWidth
        label="Тип вопроса"
      >
        {Object.keys(SampleVariants).map((sample) => (
          <MenuItem value={sample} key={sample}>
            {SampleTitles[sample as keyof typeof SampleVariants]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
