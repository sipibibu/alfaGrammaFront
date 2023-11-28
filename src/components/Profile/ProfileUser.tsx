import styles from './profile.module.css';
import Interests from './Interests.tsx';
import avatar from './Avatar.png';
import {useContext, useState} from "react";
import {Context} from "../../main";
import {observer} from "mobx-react-lite";
import {additionalDataUser} from "../../models/IUser.ts";

const ProfileUser = () => {
    const {store} = useContext(Context)
    const {name, surname, login} = store.user
    const additionalDataUserServer = store.user.additionalData
    const [mode, setMode] = useState('display')
    const [additionalDataUser, setAdditionalDataUser] = useState<additionalDataUser>(
        {
        age: '',
        education: '',
        interests: [],
        options: []
    })
    return (
    <div className={styles.profile}>
      <div className={styles.bottomMenu}>
        <img src={avatar} className={styles.image} alt="profile image" />
        <p className={styles.name}>{name} {surname} {login}</p>
        <div>
          <h3 className={styles.ageTitle}>Возраст</h3>
            {
                mode == 'edit' ?
                    <input
                        value={additionalDataUser.age}
                        onChange={(e) => setAdditionalDataUser({...additionalDataUser, age: e.target.value})}/>
                    :
                    <div>{additionalDataUserServer?.age}</div>
            }
        </div>
        <div>
          <h3 className={styles.educationTitle}>Образование</h3>
            {
                mode == 'edit' ?
                    <input
                        value={additionalDataUser.education}
                        onChange={(e) => setAdditionalDataUser({...additionalDataUser, education: e.target.value})}/>
                    :
                    <div>{additionalDataUserServer?.education}</div>
            }
        </div>
          {mode == 'edit' ?
              <button className={styles.whatUseEditBtn} onClick={() => {setMode('display'); console.log(additionalDataUser)}}>сохранить</button>
              :
          <button className={styles.whatUseEditBtn} onClick={() => setMode('edit')}>редактировать</button>
          }
      </div>
      <div className={styles.content}>
        <Interests mode={mode} additionalDataUser={additionalDataUser} setAdditionalDataUser={setAdditionalDataUser}/>
      </div>
    </div>
    );
}
export default observer(ProfileUser);
