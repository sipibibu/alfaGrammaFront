import * as React from 'react';
import styles from './Login.module.css'
import {useState} from "react";
import AuthService from "../../services/AuthService";

const Login = () => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [token, setToken] = useState('')// useContext для token, access

    const getToken = () => {
        AuthService.login(login, password).then(resp => setToken(resp.data.access_jwt_token))
        console.log(token)
    }

    return (
        <div className={styles.loginBlock}>
            <div className={styles.loginContent}>
                <img src="/src/components/TopMenu/logo.png" alt="logo"/>
                <div className={styles.inputBlock}>
                    <input onChange={e => setLogin(e.target.value)}
                           placeholder={"Логин"}
                           type={"text"}
                           className={styles.inputData}
                           value={login}
                    />
                    <input onChange={e => setPassword(e.target.value)}
                           placeholder={"Пароль"}
                           type={"password"}
                           className={styles.inputData}
                           value={password}
                    />
                </div>
                <button className={styles.loginBtn} onClick={getToken} type={"submit"}>Войти</button>
            </div>
        </div>
    );
};

export default Login;
