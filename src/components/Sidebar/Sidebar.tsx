import styles from "../Gramms/GrammsPage.module.css";
import Search from "../Search/Search.tsx";
import Selector from "../Selector/Selector.tsx";

export interface SidebarProps{
    search: string,
    onChangeSearch: (input: string) => void
}

const Sidebar = ({search, onChangeSearch} : SidebarProps) => {
    return (
        <div className={styles.sidebar}>
            <Search search={search} onChangeSearch={onChangeSearch}/>
            <Selector />
        </div>
    );
};

export default Sidebar;
