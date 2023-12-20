import styles from './profile.module.css';
import React, {useContext, useEffect, useState} from "react";
import {additionalDataRespondent} from "../../models/IUser.ts";
import Select, {
    MultiValue,
    OptionsType,
    OptionType
} from "react-select";
import {Context} from "../../main.tsx";

const optionsServer: OptionsType<OptionType> = [
    { value: "спорт", label: "спорт"},
    { value: "it", label: "it"},
    { value: "рисование", label: "рисование"},
    { value: "фильмы", label: "фильмы"}
];

export interface Interests{
    mode: string
    options: MultiValue<string> | string
    setOptions: React.Dispatch<React.SetStateAction<MultiValue<string> | string>>
    interests: string[]
    setInterests: React.Dispatch<any>
}

export default function Interests({mode, options, setOptions, setInterests} : Interests) {
    const {store} = useContext(Context)
    const  userInterests = store.respondent.additionalData?.interests
    return (
        <>
            <h3 className={styles.whatUseTitle}>Чем интересуюсь</h3>
            { mode == 'edit' ? <Select
                    options={optionsServer}
                    placeholder="Выберите темы"
                    value={options}
                    onChange={(data) => {setOptions(data); setInterests(data.map(e => e.value))}}
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
