import styles from "./topmenu.module.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import CustomLink from "../UI/CustomLink.tsx";
import profileImage from "./profile-image.png";

const TopMenuManager = () => {
  return (
    <div className={styles.menu}>
      <Link to={"/ourgrammas"}>
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>
      <nav className={styles.nav}>
        <CustomLink link={"/ourgrammas"} text={"наши опросы"} />
        <CustomLink link={"/gramma-constructor"} text={"создать опрос"} />
      </nav>
      <Link to={"/profile-manager"}>
        <img
          src={profileImage}
          className={styles.profileImage}
          alt="profile image"
        />
      </Link>
    </div>
  );
};

export default TopMenuManager;
