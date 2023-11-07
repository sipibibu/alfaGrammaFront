import * as React from 'react';
import styles from './Login.module.css'

const Login = () => {
    return (
        <div className={styles.loginBlock}>
            <div className={styles.loginContent}>
                <img
                    src="/src/components/TopMenu/logo.png"
                    alt="logo"
                />
                <div className={styles.inputBlock}>
                    <input placeholder={"Логин"} className={styles.inputData}/>
                    <input placeholder={"Пароль"} className={styles.inputData}/>
                </div>
                <button className={styles.loginBtn}>Войти</button>
            </div>
        </div>
    );
};

export default Login;
