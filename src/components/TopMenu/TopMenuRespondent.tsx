import styles from "./topmenu.module.css";
import logo from "./logo.png";
import profileImage from "./profile-image.png";
import { Link } from "react-router-dom";
import CustomLink from "../UI/CustomLink.tsx";
import { useStores } from "../../rootStoreContext.ts";

export default function TopMenuRespondent() {
  const { userStore } = useStores();
  return (
    <div className={styles.menu}>
      <Link to={"/"}>
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>
      <nav className={styles.nav}>
        <CustomLink link={"/"} text={"опросы"} />
        <CustomLink link={"/mylist"} text={"мои опросы"} />
      </nav>
      <Link
        to={userStore.role == "Respondent" ? "/profile-respondent" : "/login"}
      >
        <img
          src={profileImage}
          className={styles.profileImage}
          alt="profile image"
        />
      </Link>
    </div>
  );
}
