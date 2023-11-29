import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/ProfileUser.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import Layout from './components/Layout/Layout.tsx';
import GrammaPage from './components/GrammaPage/GrammaPage.tsx';
import './index.css'
import * as React from "react";
import Authorization from "./components/Authorization/Authorization";
import Registration from "./components/Registration/Registration.tsx";
import GrammaConstructor from "./components/GrammaConstructor/GrammaConstructor.tsx";
import Login from "./components/Login/Login.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        {/*<Layout>*/}
          <Routes>
            <Route path={'profile'} element={<Profile />}/>
            <Route path={'/'} element={<Login />}/>
            <Route path={'registration'} element={<Registration />}/>
            <Route path={'mylist'} element={<Sidebar />}/>
            <Route path={'grammas/:id'} element={<GrammaPage />} />
            <Route path={'grammaConstuctor'} element={<GrammaConstructor/>}/>
          </Routes>
        {/*</Layout>*/}
      </BrowserRouter>
    </>
  );
}

export default App;
