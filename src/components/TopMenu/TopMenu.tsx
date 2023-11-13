import styles from './topmenu.module.css';
import * as classNames from 'classnames';
import logo from './logo.png';
import profileImage from './profile-image.png';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export default function TopMenu() {
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
          to={'/mylist'}
          className={classNames(
            styles.link,
            location === '/mylist' ? styles.linkActive : ''
          )}
        >
          мои опросы
        </Link>
      </nav>
      <Link to={'/profile'}>
        <img
          src={profileImage}
          className={styles.profileImage}
          alt="profile image"
        />
      </Link>
    </div>
  );
}
