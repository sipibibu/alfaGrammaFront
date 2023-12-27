import styles from "../gramma-constructor.module.css";
import { Autocomplete, TextField } from "@mui/material";
import { MockInterests } from "../../../mock/mock-interests.tsx";

type InterestSelectProps = {
  chosenInterest: string;
  onChange: (interest: string) => void;
};

export default function InterestSelect({
  chosenInterest,
  onChange,
}: InterestSelectProps) {
  return (
    <Autocomplete
      className={styles.interest}
      disablePortal
      id="combo-box-demo"
      options={MockInterests}
      sx={{ width: "100%" }}
      value={chosenInterest}
      onChange={(_: any, newValue: string | null) => {
        if (newValue) {
          onChange(newValue);
        }
      }}
      renderInput={(params) => <TextField {...params} label={"Выбор темы"} />}
    />
  );
}
