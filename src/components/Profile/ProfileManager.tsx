import styles from './profile.module.css';
import avatar from './Avatar.png';
import React, {useContext, useState} from "react";
import {Context} from "../../main";
import {observer} from "mobx-react-lite";
import {additionalDataManager} from "../../models/IUser.ts";

const ProfileManager = () => {
    const {store} = useContext(Context)
    const {name, surname, login} = store.user
    const additionalDataManagerServer = store.manager.additionalData
    const [mode, setMode] = useState('display')
    const [additionalDataManager, setAdditionalDataManager] = useState<additionalDataManager>({
        companyName: '',
        description: '',
    })
    return (
        <div className={styles.profile}>
            <div className={styles.bottomMenu}>
                <img src={avatar} className={styles.image} alt="profile image" />
                {
                    mode == 'edit' ?
                        <input
                            value={additionalDataManager.companyName}
                            onChange={(e) => setAdditionalDataManager({...additionalDataManager, companyName: e.target.value})}
                            placeholder={"название компании"}
                        />
                        :
                        <p className={styles.name}>{additionalDataManagerServer?.companyName}</p>
                }
                <div>
                    <h3 className={styles.ageTitle}>Представитель</h3>
                    <div>{name} {surname}</div>
                </div>
                <div>
                    <h3 className={styles.educationTitle}>Эл. почта</h3>
                    <div>{login}</div>
                </div>
                {mode == 'edit' ?
                    <button className={styles.whatUseEditBtn} onClick={() => {setMode('display'); console.log(additionalDataManager)}}>сохранить</button>
                    :
                    <button className={styles.whatUseEditBtn} onClick={() => setMode('edit')}>редактировать</button>
                }
            </div>
            <div className={styles.content}>
                <h3 className={styles.whatUseTitle}>Описание</h3>
                {
                    mode == 'edit' ?
                        <input
                            value={additionalDataManager.description}
                            onChange={(e) => setAdditionalDataManager({...additionalDataManager, description: e.target.value})}/>
                        :
                        <div>{additionalDataManagerServer?.description}</div>
                }
            </div>
        </div>
    );
}
export default observer(ProfileManager);
