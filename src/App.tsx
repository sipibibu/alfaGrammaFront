import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [select, setSelect] = useState("Пользователь")
  const axiosInstance = axios.create({
            baseURL: "https://alpha-gramms.zavsoft.net/",
            withCredentials: true,
        }
        );

    const getSelectedValue = (event) => {
      setSelect(event.target.value)
  }

  const axiosGet = () => {
    axios.get("https://alpha-gramms.zavsoft.net/register/respondent", {
        withCredentials: true,
        credentials: "include",
        cors: {
            "Access-Control-Allow-Origin": "https://alpha-gramms.zavsoft.net",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Methods": ["POST", "PUT", "PATCH", "GET", "DELETE", "OPTIONS"],
            "Access-Control-Allow-Headers": ["Origin", "X-Requested-With", "Content-Type", "Accept"]
        }})
  }

  return (
    <>
        <p>Выберите роль</p>
        <select onChange={getSelectedValue} value={select}>
            <option>Пользователь</option>
            <option>Предприниматель</option>
        </select>
        <button onClick={axiosGet} type={"submit"}>войти</button>
    </>
  )
}

export default App
