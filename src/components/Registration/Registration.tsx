import styles from "../../styles/Authorization.module.css";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Navigate, useNavigate } from "react-router";
import { IUserAuth } from "../../models/IUser.ts";
import { useStores } from "../../rootStoreContext.ts";
import { Role } from "../../const.ts";
import { validateRegistrationForm } from "../../utils/validation.ts";

const Registration = () => {
  const [userAuth, setUserAuth] = useState<IUserAuth>({
    name: "",
    surname: "",
    login: "",
    role: Role.Respondent,
    password: "",
  });
  const navigate = useNavigate();
  const { userStore } = useStores();

  async function registration(userAuth: IUserAuth) {
    if (validateRegistrationForm(userAuth)) {
      await userStore.authorization(userAuth);
      if (userStore.role == "Respondent") {
        navigate("/profile-respondent");
      } else if (userStore.role == "Manager") {
        navigate("/profile-manager");
      } else {
        navigate("/");
      }
    }
  }

  if (userStore.role === Role.Respondent) {
    return <Navigate to={"/grammas"} />;
  }

  if (userStore.role === Role.Manager) {
    return <Navigate to={"/ourgrammas"} />;
  }

  return (
    <div className={styles.registrationBlock}>
      <div className={styles.loginContent}>
        <img src="/src/components/TopMenu/logo.png" alt="logo" />
        <div className={styles.inputBlock}>
          <input
            placeholder={"имя"}
            type={"text"}
            className={styles.inputData}
            value={userAuth.name}
            onChange={(e) => setUserAuth({ ...userAuth, name: e.target.value })}
          />
          <input
            placeholder={"фамилия"}
            type={"text"}
            className={styles.inputData}
            value={userAuth.surname}
            onChange={(e) =>
              setUserAuth({ ...userAuth, surname: e.target.value })
            }
          />
          <input
            placeholder={"Email"}
            type={"text"}
            className={styles.inputData}
            value={userAuth.login}
            onChange={(e) =>
              setUserAuth({ ...userAuth, login: e.target.value })
            }
          />
          <input
            placeholder={"Пароль"}
            type={"password"}
            className={styles.inputData}
            value={userAuth.password}
            onChange={(e) =>
              setUserAuth({ ...userAuth, password: e.target.value })
            }
          />
        </div>
        <div className={styles.roleBlock}>
          <div className={styles.textRole}>Выберите роль</div>
          <select
            className={styles.selectBlock}
            value={userAuth.role}
            onChange={(e) => setUserAuth({ ...userAuth, role: e.target.value })}
          >
            <option value={Role.Respondent}>Пользователь</option>
            <option value={Role.Manager}>Менеджер</option>
          </select>
        </div>
        <div className={styles.loginBtnBlock}>
          <button
            className={styles.loginBtn}
            onClick={() => registration(userAuth)}
            type={"submit"}
          >
            Зарегистрироваться
          </button>
          <div className={styles.accountBlock}>
            <div className={styles.accountText}>У вас есть аккаунт?</div>
            <button
              className={styles.accountButton}
              onClick={() => navigate("/login")}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Registration);
