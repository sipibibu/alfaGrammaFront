import styles from './topmenu.module.css';
import classNames from 'classnames';

export default function TopMenu() {
  return (
    <div className={styles.menu}>
      <img src="/images/logo.png" className={styles.logo} alt="logo" />
      <nav className={styles.nav}>
        <a className={classNames(styles.link, styles.linkActive)}>опросы</a>
        <a className={styles.link}>мои опросы</a>
      </nav>
      <a href="#">
        <img
          src="/images/profile-image.png"
          className={styles.profileImage}
          alt="profile image"
        />
      </a>
    </div>
  );
}
