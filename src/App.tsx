import { useState } from 'react'
import './index.css'
import axios from "axios";
import styles from "./components/Login/Login.module.css";
import * as React from "react";

function App() {
  const [select, setSelect] = useState("Пользователь")
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const axiosInstance = axios.create({
            baseURL: "http://78.153.5.24:8080",
        }
        );

  //   const getSelectedValue = (event) => {
  //     setSelect(event.target.value)
  // }

    const getLogin = (event) => {
        setLogin(event.target.value)
    }

    const getPassword = (event) => {
        setPassword(event.target.value)
    }

  async function axiosGet(){
    const response = await axiosInstance.post("/login",
        {
     username: login,
     password: password
    })
      console.log(response)
    }

  return (
    <>
        {/*<input placeholder={"логин"} value={login} onChange={getLogin}/>*/}
        {/*<input placeholder={"пароль"} value={password} onChange={getPassword}/>*/}
        {/*<button onClick={axiosGet} type={"submit"}>войти</button>*/}
        {/*<p>Выберите роль</p>*/}
        {/*<select onChange={getSelectedValue} value={select}>*/}
        {/*    <option>Пользователь</option>*/}
        {/*    <option>Предприниматель</option>*/}
        {/*</select>*/}
        {/*<TopMenu/>*/}
        {/*<Sidebar/>*/}
        <div className={styles.loginBlock}>
            <div className={styles.loginContent}>
                <img src="/src/components/TopMenu/logo.png" alt="logo"/>
                <div className={styles.inputBlock}>
                    <input placeholder={"Логин"} className={styles.inputData} value={login} onChange={getLogin}/>
                    <input placeholder={"Пароль"} className={styles.inputData} value={password} onChange={getPassword}/>
                </div>
                <button className={styles.loginBtn} onClick={axiosGet} type={"submit"}>Войти</button>
            </div>
        </div>
    </>
  )
}

export default App
