import styles from "./topmenu.module.css";
import logo from "./logo.png";
import profileImage from "./profile-image.png";
import { Link } from "react-router-dom";
import CustomLink from "../UI/CustomLink.tsx";

function TopMenuRespondent() {
  return (
    <div className={styles.menu}>
      <Link to={"/grammas"}>
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>
      <nav className={styles.nav}>
        <CustomLink link={"/grammas"} text={"опросы"} />
        <CustomLink link={"/mylist"} text={"мои опросы"} />
      </nav>
      <Link to={"/profile-respondent"}>
        <img
          src={profileImage}
          className={styles.profileImage}
          alt="profile image"
        />
      </Link>
    </div>
  );
}

export default TopMenuRespondent;
