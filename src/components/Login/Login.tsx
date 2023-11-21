import * as React from 'react';
import styles from './Login.module.css'
import {useContext, useState} from "react";
import AuthService from "../../services/AuthService";
import {Context} from "../../main";

const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [token, setToken] = useState('')// useContext для token, access
    const {store} = useContext(Context)

    // const getToken = () => {
    //     AuthService.login(email, password).then(resp => setToken(resp.data.access_jwt_token))
    //     console.log(token)
    // }

    return (
        <div className={styles.loginBlock}>
            <div className={styles.loginContent}>
                <img src="/src/components/TopMenu/logo.png" alt="logo"/>
                <div className={styles.inputBlock}>
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
                <button
                    className={styles.loginBtn}
                    onClick={() => store.login(email, password)}
                    type={"submit"}>
                    Войти
                </button>
            </div>
        </div>
    );
};

export default Login;
