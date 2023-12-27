import styles from "./sidebar.module.css";
import Search from "../Search/Search.tsx";
import Selector from "../Selector/Selector.tsx";

export interface SidebarProps {
  search: string;
  onChangeSearch: (input: string) => void;
}

const Sidebar = ({ search, onChangeSearch }: SidebarProps) => {
  return (
    <div className={styles.bar}>
      <Search search={search} onChangeSearch={onChangeSearch} />
      <Selector />
    </div>
  );
};

export default Sidebar;
