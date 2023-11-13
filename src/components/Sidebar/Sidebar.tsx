import styles from './Sidebar.module.css';
import Search from '../Search/Search';
import Selector from '../Selector/Selector';
import PollCard from "../PollCard/PollCard";

const Sidebar = () => {
  return (
      <div style={{display: "flex", flexDirection: "row", gap: "90px"}}>
          <div className={styles.sidebar}>
              <Search />
              <Selector />
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "38px", marginTop: "37px"}}>
              <PollCard/>
              <PollCard/>
              <PollCard/>
          </div>
      </div>
  );
};

export default Sidebar;
