import * as React from 'react';
import styles from '../Login/Login.module.css'
import {useState} from "react";
import AuthService from "../../services/AuthService";
import {useNavigate} from "react-router";

const Registration = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [select, setSelect] = useState("respondent")// useContext для token, access, interceptors
    const [resp, setResp] = useState('')
    const navigate = useNavigate()

    const getLogin = (event) => {
        setLogin(event.target.value)
    }

    const getPassword = (event) => {
        setPassword(event.target.value)
    }

    const getSelectedValue = (event) => {
        setSelect(event.target.value)
    }

    async function registration() {
        setResp((await AuthService.registration(login, password, select)).status)
        console.log(resp)
        if(resp == 200){
            await AuthService.login(login, password).then(resp => setToken(resp.data.access_jwt_token))
            if(select == "respondent"){
                navigate('/profile')
            }
            else {
                navigate('/mylist')
            }
            console.log(token)
        }
        else{
            console.log("что то не так")
        }
    }

    return (
        <div className={styles.loginBlock}>
            <div className={styles.loginContent}>
                <img src="/src/components/TopMenu/logo.png" alt="logo"/>
                <div className={styles.inputBlock}>
                    <input placeholder={"имя"} className={styles.inputData} value={login} onChange={getLogin}/>
                    <input placeholder={"фамилия"} className={styles.inputData} value={login} onChange={getLogin}/>
                    <input placeholder={"Email"} className={styles.inputData} value={login} onChange={getLogin}/>
                    <input placeholder={"Пароль"} className={styles.inputData} value={password} onChange={getPassword}/>
                </div>
                <p>Выберите роль</p>
                <select onChange={getSelectedValue} value={select}>
                    <option value={"respondent"}>Пользователь</option>
                    <option value={"manager"}>Менеджер</option>
                </select>
                <button className={styles.loginBtn} onClick={registration} type={"submit"}>Зарегистрироваться</button>
            </div>
        </div>
    );
};

export default Registration;
