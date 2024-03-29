import styles from "./profile.module.css";
// @ts-ignore
import Select, { MultiValue, OptionsType, OptionType } from "react-select";
import { useStores } from "../../rootStoreContext.ts";
import {useEffect} from "react";

export interface Interests {
  mode: string;
  options: MultiValue<string> | string;
  setOptions: React.Dispatch<React.SetStateAction<MultiValue<string> | string>>;
  interests: string[];
  setInterests: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Interests({
  mode,
  options,
  setOptions,
  setInterests,
}: Interests) {
  const { userStore, grammaStore } = useStores();
  const userInterests = userStore.respondent.additionalData?.interests;
  const optionsServer : OptionsType<OptionType> = grammaStore.interests.map((interest) => { return {value: interest.name, label: interest.name}} )
  useEffect(() => {
    grammaStore.getInterests()
  }, [grammaStore])

  // @ts-ignore
  return (
    <>
      <h3 className={styles.whatUseTitle}>Чем интересуюсь</h3>
      {mode == "edit" ? (
        <Select
          options={optionsServer}
          placeholder="Выберите темы"
          value={options}
          onChange={(data) => {
            setOptions(data);
            setInterests(data.map((e: any) => e.value));
          }}
          isSearchable={true}
          isMulti
        />
      ) : (
        <ul className={styles.whatUseList}>
          {userInterests?.map((item: any, count) => (
            <li className={styles.whatUseItem} key={count}>
              {item.name ? item.name : item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
