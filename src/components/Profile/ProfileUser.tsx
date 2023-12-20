import styles from './profile.module.css';
import Interests from './Interests.tsx';
import avatar from './Avatar.png';
import {useContext, useState} from "react";
import {Context} from "../../main";
import {observer} from "mobx-react-lite";
import {additionalDataRespondent} from "../../models/IUser.ts";
import {MultiValue} from "react-select";

const ProfileUser = () => {
    const {store} = useContext(Context)
    const {name, surname} = store.user
    const additionalDataUserServer = store.respondent.additionalData
    const [age, setAge] = useState<number>(0)
    const [education, setEducation] = useState<string>('')
    const [options, setOptions] = useState<MultiValue<string> | string>([])
    const [interests, setInterests] = useState<string[]>([])
    const [mode, setMode] = useState('display')
    // const [additionalDataUser, setAdditionalDataUser] = useState<additionalDataRespondent>({
    //     imageUrl: '',
    //     age: '',
    //     education: '',
    //     interests: [],
    //     options: []
    // })
    // const [image, setImage] = useState()
    // const [imageUrl, setImageUrl] = useState()
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
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}/>
                    :
                    <div>{additionalDataUserServer?.age}</div>
            }
        </div>
        <div>
          <h3 className={styles.educationTitle}>Образование</h3>
            {
                mode == 'edit' ?
                    <input
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
                  store.updateProfile(age, education, interests)}}>сохранить
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
