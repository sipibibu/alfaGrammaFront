import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GrammsPage from './components/Gramms/GrammsPage.tsx';
import GrammaPage from './components/GrammaPage/GrammaPage.tsx';
import './index.css'
import * as React from "react";
import Registration from "./components/Registration/Registration.tsx";
import Login from "./components/Login/Login.tsx";
import ProfileUser from "./components/Profile/ProfileUser.tsx";
import ProfileManager from "./components/Profile/ProfileManager.tsx";
import {LayoutRespondent} from "./components/Layout/LayoutRespondent.tsx";
import GrammaForm from "./components/GrammaForm/GrammaForm.tsx";
import GrammaConstructor from "./components/GrammaConstructor/GrammaConstructor.tsx";
import {LayoutManager} from "./components/Layout/LayoutManager.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Login />}/>
            <Route path={'registration'} element={<Registration />}/>
              <Route element={<LayoutRespondent />}>
                <Route path={'profile-respondent'} element={<ProfileUser />}/>
                <Route path={'mylist'} element={<GrammsPage />}/>
                <Route path={'grammas/:id'} element={<GrammaPage />}/>
                <Route path={'gramma-form'} element={<GrammaForm />}/>
                <Route path={'grammas'} element={<GrammsPage />}/>
              </Route>
              <Route element={<LayoutManager />}>
                <Route path={'profile-manager'} element={<ProfileManager />}/>
                <Route path={'gramma-constructor'} element={<GrammaConstructor />}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
