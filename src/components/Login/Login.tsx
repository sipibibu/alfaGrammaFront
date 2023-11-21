import * as React from 'react';
import styles from './Login.module.css'
import {useContext, useState} from "react";
import {Context} from "../../main";
import {observer} from "mobx-react-lite";

const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context)
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

export default observer(Login);
