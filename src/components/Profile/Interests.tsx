import styles from "./profile.module.css";
import Select, { MultiValue, OptionsType, OptionType } from "react-select";
import { useStores } from "../../rootStoreContext.ts";

const optionsServer: OptionsType<OptionType> = [
  { value: "спорт", label: "спорт" },
  { value: "it", label: "it" },
  { value: "рисование", label: "рисование" },
  { value: "фильмы", label: "фильмы" },
];

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
  const { userStore } = useStores();
  const userInterests = userStore.respondent.additionalData?.interests;
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
            setInterests(data.map((e) => e.value));
          }}
          isSearchable={true}
          isMulti
        />
      ) : (
        <ul className={styles.whatUseList}>
          {userInterests?.map((item, count) => (
            <li className={styles.whatUseItem} key={count}>
              {item.name ? item.name : item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
