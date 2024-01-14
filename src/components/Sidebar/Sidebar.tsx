import styles from "./sidebar.module.css";
import Search from "../Search/Search.tsx";
import InterestSelect from "../InterestSelect/InterestSelect.tsx";
import { IInterest } from "../../types.ts";

export interface SidebarProps {
  search: string;
  onChangeSearch: (input: string) => void;
  interests: IInterest[];
  interestId: IInterest;
  setInterestId: (id: IInterest) => void;
}

const Sidebar = ({
  search,
  onChangeSearch,
  interests,
  interestId,
  setInterestId,
}: SidebarProps) => {
  return (
    <div className={styles.bar}>
      <Search search={search} onChangeSearch={onChangeSearch} />
      <InterestSelect
        interests={interests}
        chosenInterest={interestId}
        onChange={setInterestId}
      />
    </div>
  );
};

export default Sidebar;
