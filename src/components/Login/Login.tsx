import * as React from 'react';
import styles from './Login.module.css'
import {useState} from "react";
import AuthService from "../../API/AuthService";

const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    const getLogin = (event) => {
        setLogin(event.target.value)
    }

    const getPassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div className={styles.loginBlock}>
            <div className={styles.loginContent}>
                <img src="/src/components/TopMenu/logo.png" alt="logo"/>
                <div className={styles.inputBlock}>
                    <input placeholder={"Логин"} className={styles.inputData} value={login} onChange={getLogin}/>
                    <input placeholder={"Пароль"} className={styles.inputData} value={password} onChange={getPassword}/>
                </div>
                <button className={styles.loginBtn} onClick={() => AuthService.axiosGet(login, password)} type={"submit"}>Войти</button>
            </div>
        </div>
    );
};

export default Login;
