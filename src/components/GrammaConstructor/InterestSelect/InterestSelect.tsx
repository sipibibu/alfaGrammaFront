import styles from "../gramma-constructor.module.css";
import { Autocomplete, TextField } from "@mui/material";
import { IInterest } from "../../../types.ts";

type InterestSelectProps = {
  interests: IInterest[];
  chosenInterest: IInterest;
  onChange: (interest: IInterest) => void;
};

export default function InterestSelect({
  interests,
  chosenInterest,
  onChange,
}: InterestSelectProps) {
  return (
    <Autocomplete
      className={styles.interest}
      disablePortal
      id="combo-box-demo"
      options={interests.map((interest) => interest.name)}
      sx={{ width: "100%" }}
      value={chosenInterest.name}
      onChange={(_: any, newValue: string | null) => {
        if (newValue) {
          const interest = interests.find(
            (interest) => interest.name === newValue,
          ) as IInterest;
          onChange(interest);
        }
      }}
      renderInput={(params) => <TextField {...params} label={"Выбор темы"} />}
    />
  );
}
