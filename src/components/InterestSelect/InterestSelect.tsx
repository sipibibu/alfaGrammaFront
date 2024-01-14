import styles from "../GrammaConstructor/gramma-constructor.module.css";
import { Autocomplete, TextField } from "@mui/material";
import { IInterest } from "../../types.ts";
import { WithoutInterest } from "../../const.ts";

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
      defaultValue={WithoutInterest.name}
      options={[WithoutInterest, ...interests].map((interest) => interest.name)}
      sx={{ width: "100%" }}
      value={chosenInterest.name}
      onChange={(_: any, newValue: string | null) => {
        if (newValue) {
          const interest = [WithoutInterest, ...interests].find(
            (interest) => interest.name === newValue,
          ) as IInterest;
          onChange(interest);
        }
      }}
      renderInput={(params) => <TextField {...params} label={"Выбор темы"} />}
    />
  );
}
