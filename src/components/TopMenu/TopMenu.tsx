import styles from './topmenu.module.css';
import * as classNames from 'classnames';
import logo from './logo.png';
import profileImage from './profile-image.png';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import {useContext} from "react";
import {Context} from "../../main.tsx";

export default function TopMenu() {
  const {store} = useContext(Context)
  const location = useLocation().pathname;
  return (
    <div className={styles.menu}>
      <Link to={'/'}>
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>
      <nav className={styles.nav}>
        <Link
          to="/"
          className={classNames(
            styles.link,
            location === '/' ? styles.linkActive : ''
          )}
        >
          опросы
        </Link>
        <Link
          to={ store.user.role == "Respondent" ? '/gramma-form' : '/gramma-constructor'}
          className={classNames(
            styles.link,
            location == (store.user.role == "Respondent" ? '/gramma-form' : '/gramma-constructor') ? styles.linkActive : ''
          )}
        >
          мои опросы
        </Link>
      </nav>
      <Link to={ store.user.role == "Respondent" ? '/profile-respondent' : '/profile-manager'}>
        <img
          src={profileImage}
          className={styles.profileImage}
          alt="profile image"
        />
      </Link>
    </div>
  );
}
