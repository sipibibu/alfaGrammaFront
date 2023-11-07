import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import Layout from './components/Layout/Layout.tsx';
import GrammaPage from './components/GrammaPage/GrammaPage.tsx';

function App() {
  // const [select, setSelect] = useState("Пользователь")
  // const axiosInstance = axios.create({
  //           baseURL: "https://alpha-gramms.zavsoft.net/",
  //           withCredentials: true,
  //       }
  //       );
  //
  //   const getSelectedValue = (event) => {
  //     setSelect(event.target.value)
  // }
  //
  // const axiosGet = () => {
  //   axios.get("https://alpha-gramms.zavsoft.net/register/respondent", {
  //       withCredentials: true,
  //       credentials: "include",
  //       cors: {
  //           "Access-Control-Allow-Origin": "https://alpha-gramms.zavsoft.net",
  //           "Access-Control-Allow-Credentials": true,
  //           "Access-Control-Allow-Methods": ["POST", "PUT", "PATCH", "GET", "DELETE", "OPTIONS"],
  //           "Access-Control-Allow-Headers": ["Origin", "X-Requested-With", "Content-Type", "Accept"]
  //       }})
  // }

  return (
    <>
      {/*<p>Выберите роль</p>*/}
      {/*<select onChange={getSelectedValue} value={select}>*/}
      {/*    <option>Пользователь</option>*/}
      {/*    <option>Предприниматель</option>*/}
      {/*</select>*/}
      {/*<button onClick={axiosGet} type={"submit"}>войти</button>*/}
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={'/profile'} element={<Profile />}></Route>
            <Route path={'/'} element={<Sidebar />}></Route>
            <Route path={'/mylist'} element={<Sidebar />}></Route>
            <Route path={'/grammas/:id'} element={<GrammaPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
