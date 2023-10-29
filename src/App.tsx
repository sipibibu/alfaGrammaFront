import { useState } from 'react'
import './App.css'
import axios from "axios";
import {server} from "./const";

function App() {
  const [select, setSelect] = useState("Пользователь")
  const getSelectedValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelect(event.target.value)
  }

  const axiosGet = () => {
      axios.get(server + "/register/respondent").then((response) => {
          console.log(response);
      });
  }

  return (
    <>
        <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
        <p>Выберите роль</p>
        <select onChange={() => getSelectedValue} value={select}>
            <option>Пользователь</option>
            <option>Предприниматель</option>
        </select>
        <button onClick={axiosGet}>войти</button>
        </div>
    </>
  )
}

export default App
