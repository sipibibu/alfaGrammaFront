import {useContext} from 'react';
import styles from "./topmenu.module.css";
import {Link} from "react-router-dom";
import logo from "./logo.png";
import CustomLink from "../UI/CustomLink.tsx";
import profileImage from "./profile-image.png";
import {Context} from "../../main.tsx";

const TopMenuManager = () => {
    const {store} = useContext(Context)
    return (
        <div className={styles.menu}>
            <Link to={'/'}>
                <img src={logo} className={styles.logo} alt="logo" />
            </Link>
            <nav className={styles.nav}>
                <CustomLink link={"/"} text={"наши опросы"}/>
                <CustomLink link={store.user.role == "Manager" ? '/gramma-constructor' : '/'} text={"создать опрос"}/>
            </nav>
            <Link to={ store.user.role == "Manager" ? '/profile-manager' : '/'}>
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
