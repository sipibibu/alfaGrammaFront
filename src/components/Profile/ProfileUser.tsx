import styles from './profile.module.css';
import Interests from './Interests.tsx';
import avatar from './Avatar.png';
import {useContext, useEffect, useState} from "react";
import {Context} from "../../main";
import {observer} from "mobx-react-lite";
import {MultiValue} from "react-select";

const ProfileUser = () => {
    const {store} = useContext(Context)
    const {name, surname} = store.respondent
    const additionalDataUserServer = store.respondent.additionalData
    const [age, setAge] = useState<string>('')
    const [education, setEducation] = useState<string>('')
    const [options, setOptions] = useState<MultiValue<string> | string>([])
    const [interests, setInterests] = useState<string[]>([])
    const [mode, setMode] = useState('display')
    useEffect(() => {
        store.getAccount()
    }, [store])
    return (
    <div className={styles.profile}>
      <div className={styles.bottomMenu}>
          {
              additionalDataUserServer?.imageUrl != null ?
                  <img src={additionalDataUserServer?.imageUrl} className={styles.image} alt="profile image" />
                  :
                  <img src={avatar} className={styles.image} alt="profile image" />
          }
        <p className={styles.name}>{name} {surname}</p>
        <div>
          <h3 className={styles.ageTitle}>Возраст</h3>
            {
                mode == 'edit' ?
                    <input
                        placeholder={additionalDataUserServer?.age}
                        value={age}
                        onChange={(e) => setAge(e.target.value)}/>
                    :
                    <div>{additionalDataUserServer?.age}</div>
            }
        </div>
        <div>
          <h3 className={styles.educationTitle}>Образование</h3>
            {
                mode == 'edit' ?
                    <input
                        placeholder={additionalDataUserServer?.education}
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}/>
                    :
                    <div>{additionalDataUserServer?.education}</div>
            }
        </div>
          {
              mode == 'edit' ?
              <button className={styles.whatUseEditBtn} onClick={() => {
                  setMode('display');
                  console.log(age, education, interests);
                  store.updateProfileRespondent(age, education, interests)}}>сохранить
              </button>
              :
          <button className={styles.whatUseEditBtn} onClick={() => setMode('edit')}>редактировать</button>
          }
      </div>
      <div className={styles.content}>
        <Interests mode={mode} options={options} setOptions={setOptions} interests={interests} setInterests={setInterests}/>
      </div>
    </div>
    );
}
export default observer(ProfileUser);
