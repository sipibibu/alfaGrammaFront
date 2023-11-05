import styles from './topmenu.module.css';
import * as classNames from 'classnames';

export default function TopMenu() {
  return (
    <div className={styles.menu}>
      <img
        src="/src/components/TopMenu/logo.png"
        className={styles.logo}
        alt="logo"
      />
      <nav className={styles.nav}>
        <a className={classNames(styles.link, styles.linkActive)}>опросы</a>
        <a className={styles.link}>мои опросы</a>
      </nav>
      <a href="#">
        <img
          src="/src/components/TopMenu/profile-image.png"
          className={styles.profileImage}
          alt="profile image"
        />
      </a>
    </div>
  );
}
