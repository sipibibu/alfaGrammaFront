import styles from './profile.module.css';
import Skills from './Skills.tsx';
import WhatUse from './WhatUse.tsx';
import avatar from './Avatar.png';
import {useContext} from "react";
import {Context} from "../../main";
import {observer} from "mobx-react-lite";

const Profile = () => {
    const {store} = useContext(Context)
    const {name, surname, login} = store.user
    return (
    <div className={styles.profile}>
      <div className={styles.bottomMenu}>
        <img src={avatar} className={styles.image} alt="profile image" />
        <p className={styles.name}>{name} {surname} {login}</p>
        <div>
          <h3 className={styles.ageTitle}>Возраст</h3>
          <p className={styles.age}>32</p>
        </div>
        <div>
          <h3 className={styles.educationTitle}>Образование</h3>
          <p className={styles.education}>Уральский Федеральный Университет</p>
        </div>
      </div>
      <div className={styles.content}>
        <Skills />
        <WhatUse />
          <button onClick={() => store.logout()}>выйти</button>
      </div>
    </div>
    );
}
export default observer(Profile);
