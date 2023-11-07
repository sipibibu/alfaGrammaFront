import styles from './Sidebar.module.css';
import Search from '../Search/Search';
import Selector from '../Selector/Selector';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Search />
      <Selector />
    </div>
  );
};

export default Sidebar;
