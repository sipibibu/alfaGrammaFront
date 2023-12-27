import styles from "./topmenu.module.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import CustomLink from "../UI/CustomLink.tsx";
import profileImage from "./profile-image.png";
import { useStores } from "../../rootStoreContext.ts";

const TopMenuManager = () => {
  const { userStore } = useStores();
  return (
    <div className={styles.menu}>
      <Link to={"/"}>
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>
      <nav className={styles.nav}>
        <CustomLink link={"/"} text={"наши опросы"} />
        <CustomLink link={"/ourlist"} text={"создать опрос"} />
      </nav>
      <Link to={userStore.role == "Manager" ? "/profile-manager" : "/login"}>
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
