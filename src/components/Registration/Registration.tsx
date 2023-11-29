import * as React from 'react';
import styles from '../../styles/Authorization.module.css';
import {useContext, useState} from "react";
import {Context} from "../../main";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router";

const Registration = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [selectRole, setSelectRole] = useState("respondent")
    const navigate = useNavigate()
    const {store} = useContext(Context)
    async function registration(name: string, surname: string, email: string, password: string, selectRole: string){
        await store.authorization(name, surname, email, password, selectRole)
        if(store.isAuth && store.isLogin){
            navigate('/profile')
        }
    }
    return (
        <div className={styles.registrationBlock}>
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
                <div className={styles.roleBlock}>
                    <div className={styles.textRole}>Выберите роль</div>
                    <select
                        className={styles.selectBlock}
                        value={selectRole}
                        onChange={e => setSelectRole(e.target.value)}>
                        <option value={"respondent"}>Пользователь</option>
                        <option value={"manager"}>Менеджер</option>
                    </select>
                </div>
                <div className={styles.loginBtnBlock}>
                <button
                    className={styles.loginBtn}
                    onClick={() => registration(name, surname, email, password, selectRole)}
                    type={"submit"}>
                    Зарегистрироваться
                </button>
                <div className={styles.accountBlock}>
                    <div className={styles.accountText}>У вас есть аккаунт?</div>
                    <button className={styles.accountButton} onClick={() => navigate("/")}>Войти</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default observer(Registration);
