import styles from "./topmenu.module.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import CustomLink from "../UI/CustomLink.tsx";
import profileImage from "./profile-image.png";
import { useStores } from "../../rootStoreContext.ts";
import { AuthorizationStatus } from "../../types.ts";
import { observer } from "mobx-react-lite";

const TopMenuManager = () => {
  const { userStore } = useStores();
  return (
    <div className={styles.menu}>
      <Link to={"/"}>
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>
      <nav className={styles.nav}>
        <CustomLink link={"/ourgrammas"} text={"наши опросы"} />
        <CustomLink link={"/gramma-constructor"} text={"создать опрос"} />
      </nav>
      <Link
        to={
          userStore.isAuth === AuthorizationStatus.Auth
            ? "/profile-manager"
            : "/login"
        }
      >
        <img
          src={profileImage}
          className={styles.profileImage}
          alt="profile image"
        />
      </Link>
    </div>
  );
};

export default observer(TopMenuManager);
