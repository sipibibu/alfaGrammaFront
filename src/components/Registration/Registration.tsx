import * as React from 'react';
import styles from '../Login/Login.module.css'
import {useContext, useState} from "react";
import AuthService from "../../services/AuthService";
import {useNavigate} from "react-router";
import {Context} from "../../main";

const Registration = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [selectRole, setSelectRole] = useState("respondent")// useContext для token, access, interceptors
    const {store} = useContext(Context)
    // async function registration() {
    //     setResp((await AuthService.registration(login, password, select)).status)
    //     console.log(resp)
    //     if(resp == 200){
    //         await AuthService.login(login, password).then(resp => setToken(resp.data.access_jwt_token))
    //         if(select == "respondent"){
    //             navigate('/profile')
    //         }
    //         else {
    //             navigate('/mylist')
    //         }
    //         console.log(token)
    //     }
    //     else{
    //         console.log("что то не так")
    //     }
    // }

    return (
        <div className={styles.loginBlock}>
            <div className={styles.loginContent}>
                <img src="/src/components/TopMenu/logo.png" alt="logo"/>
                <div className={styles.inputBlock}>
                    <input
                        placeholder={"имя"}
                        type={"text"}
                        className={styles.inputData}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        placeholder={"фамилия"}
                        type={"text"}
                        className={styles.inputData}
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                    />
                    <input
                        placeholder={"Email"}
                        type={"text"}
                        className={styles.inputData}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder={"Пароль"}
                        type={"password"}
                        className={styles.inputData}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <p>Выберите роль</p>
                <select value={selectRole} onChange={e => setSelectRole(e.target.value)}>
                    <option value={"respondent"}>Пользователь</option>
                    <option value={"manager"}>Менеджер</option>
                </select>
                <button
                    className={styles.loginBtn}
                    onClick={() => store.authorization(name, surname, email, password, selectRole)}
                    type={"submit"}>
                    Зарегистрироваться
                </button>
            </div>
        </div>
    );
};

export default Registration;
