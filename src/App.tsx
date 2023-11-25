import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import Layout from './components/Layout/Layout.tsx';
import GrammaPage from './components/GrammaPage/GrammaPage.tsx';
import './index.css'
import * as React from "react";
import Authorization from "./components/Authorization/Authorization";
import Registration from "./components/Registration/Registration.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        {/*<Layout>*/}
          <Routes>
            <Route path={'profile'} element={<Profile />}></Route>
            <Route path={'/'} element={<Authorization />}></Route>
            <Route path={'/registration'} element={<Registration />}></Route>
            <Route path={'mylist'} element={<Sidebar />}></Route>
            <Route path={'grammas/:id'} element={<GrammaPage />} />
          </Routes>
        {/*</Layout>*/}
      </BrowserRouter>
    </>
  );
}

export default App;
