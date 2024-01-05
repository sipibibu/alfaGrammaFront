import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Registration from "./components/Registration/Registration.tsx";
import Login from "./components/Login/Login.tsx";
import ProfileUser from "./components/Profile/ProfileUser.tsx";
import ProfileManager from "./components/Profile/ProfileManager.tsx";
import GrammaForm from "./components/GrammaForm/GrammaForm.tsx";
import GrammaConstructor from "./components/GrammaConstructor/GrammaConstructor.tsx";
import AllGrammasListPage from "./pages/AllGrammasListPage/AllGrammasListPage.tsx";
import GrammaPage from "./pages/GrammaPage/GrammaPage.tsx";
import PlannedGrammasPage from "./pages/PlannedGrammasPage/PlannedGrammasPage.tsx";
import CompanysGrammasPage from "./pages/CompanysGrammas/CompanysGrammas.tsx";
import { useEffect } from "react";
import { useStores } from "./rootStoreContext.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.tsx";
import { Role } from "./const.ts";
import Layout from "./components/Layout/Layout.tsx";
import { observer } from "mobx-react-lite";

function App() {
  const { userStore } = useStores();

  useEffect(() => {
    userStore.getAccount();
  }, [userStore.role]);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          <Route path={"registration"} element={<Registration />} />
          <Route path={"/login"} element={<Login />} />
          <Route element={<Layout />}>
            <Route element={<PrivateRoute role={Role.Respondent} />}>
              <Route path={"/grammas"} element={<AllGrammasListPage />} />
              <Route path={"profile-respondent"} element={<ProfileUser />} />
              <Route path={"/mylist"} element={<PlannedGrammasPage />} />
              <Route path={"grammas/:id"} element={<GrammaPage />} />
              <Route path={"gramma-form/:id"} element={<GrammaForm />} />
            </Route>
            <Route element={<PrivateRoute role={Role.Manager} />}>
              <Route path={"profile-manager"} element={<ProfileManager />} />
              <Route path={"/ourgrammas"} element={<CompanysGrammasPage />} />
              <Route
                path={"gramma-constructor"}
                element={<GrammaConstructor />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default observer(App);
