import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Registration from "./components/Registration/Registration.tsx";
import Login from "./components/Login/Login.tsx";
import ProfileUser from "./components/Profile/ProfileUser.tsx";
import ProfileManager from "./components/Profile/ProfileManager.tsx";
import { LayoutRespondent } from "./components/Layout/LayoutRespondent.tsx";
import GrammaForm from "./components/GrammaForm/GrammaForm.tsx";
import GrammaConstructor from "./components/GrammaConstructor/GrammaConstructor.tsx";
import { LayoutManager } from "./components/Layout/LayoutManager.tsx";
import AllGrammasListPage from "./pages/AllGrammasListPage/AllGrammasListPage.tsx";
import GrammaPage from "./pages/GrammaPage/GrammaPage.tsx";
import PlannedGrammasPage from "./pages/PlannedGrammasPage/PlannedGrammasPage.tsx";
import CompanysGrammasPage from "./pages/CompanysGrammas/CompanysGrammas.tsx";
import { useEffect } from "react";
import { useStores } from "./rootStoreContext.ts";

function App() {
  const { userStore } = useStores();

  useEffect(() => {
    userStore.getAccount();
  }, [userStore]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"registration"} element={<Registration />} />
          <Route path={"/login"} element={<Login />} />
          <Route element={<LayoutRespondent />}>
            <Route path={"/"} element={<AllGrammasListPage />} />
            <Route path={"profile-respondent"} element={<ProfileUser />} />
            <Route path={"/mylist"} element={<PlannedGrammasPage />} />
            <Route path={"grammas/:id"} element={<GrammaPage />} />
            <Route path={"gramma-form/:id"} element={<GrammaForm />} />
          </Route>
          <Route element={<LayoutManager />}>
            <Route path={"profile-manager"} element={<ProfileManager />} />
            <Route path={"/ourgrammas"} element={<CompanysGrammasPage />} />
            <Route
              path={"gramma-constructor"}
              element={<GrammaConstructor />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
