import styles from './profile.module.css';
import React, {useContext} from "react";
import {additionalDataUser} from "../../models/IUser.ts";
import Select, {
    OptionsType,
    OptionType
} from "react-select";
import {Context} from "../../main.tsx";

const options: OptionsType<OptionType> = [
    { value: "спорт", label: "спорт"},
    { value: "it", label: "it"},
    { value: "рисование", label: "рисование"},
    { value: "фильмы", label: "фильмы"}
];

export interface Interests{
    mode: string
    additionalDataUser: additionalDataUser
    setAdditionalDataUser: React.Dispatch<React.SetStateAction<additionalDataUser>>
}

export default function Interests({mode, additionalDataUser, setAdditionalDataUser} : Interests) {
    const {store} = useContext(Context)
    const  userInterests = store.user.additionalData?.interests
    return (
        <>
            <h3 className={styles.whatUseTitle}>Чем интересуюсь</h3>
            { mode == 'edit' ? <Select
                    options={options}
                    placeholder="Выберите темы"
                    value={additionalDataUser.options}
                    onChange={(data) => setAdditionalDataUser(
                        {
                            ...additionalDataUser,
                            interests: [data.map(e => e)[data.length -1].value, ...additionalDataUser.interests],
                            options: data
                        })}
                    isSearchable={true}
                    isMulti
                /> :
                <ul className={styles.whatUseList}>
                    {userInterests?.map((item) => (
                        <li className={styles.whatUseItem}>{item}</li>
                    ))}
                </ul>
            }
        </>
    );
}
