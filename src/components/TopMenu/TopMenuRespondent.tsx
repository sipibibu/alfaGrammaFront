import styles from "./topmenu.module.css";
import logo from "./logo.png";
import profileImage from "./profile-image.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../main.tsx";
import CustomLink from "../UI/CustomLink.tsx";

export default function TopMenuRespondent() {
  const { store } = useContext(Context);
  return (
    <div className={styles.menu}>
      <Link to={"/"}>
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>
      <nav className={styles.nav}>
        <CustomLink link={"/"} text={"опросы"} />
        <CustomLink link={"/mylist"} text={"мои опросы"} />
      </nav>
      <Link to={store.user.role == "Respondent" ? "/profile-respondent" : "/"}>
        <img
          src={profileImage}
          className={styles.profileImage}
          alt="profile image"
        />
      </Link>
    </div>
  );
}
