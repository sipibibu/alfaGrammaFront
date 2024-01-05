import styles from "../../styles/Authorization.module.css";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import { useStores } from "../../rootStoreContext.ts";
import { validateLoginForm } from "../../utils/validation.ts";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { userStore } = useStores();
  const navigate = useNavigate();

  async function loginUser(email: string, password: string) {
    if (validateLoginForm(email)) {
      await userStore.login(email, password);
      if (userStore.role == "Respondent") {
        navigate("/grammas");
      } else if (userStore.role == "Manager") {
        navigate("/ourgrammas");
      } else {
        navigate("/");
      }
    }
  }

  return (
    <div className={styles.loginBlock}>
      <div className={styles.loginContent}>
        <img src="/src/components/TopMenu/logo.png" alt="logo" />
        <div className={styles.inputBlock}>
          <input
            placeholder={"Email"}
            type={"text"}
            className={styles.inputData}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder={"Пароль"}
            type={"password"}
            className={styles.inputData}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.loginBtnBlock}>
          <button
            className={styles.loginBtn}
            onClick={() => loginUser(email, password)}
            type={"submit"}
          >
            Войти
          </button>
          <div className={styles.accountBlock}>
            <div className={styles.accountText}>У вас нет аккаунта?</div>
            <button
              className={styles.accountButton}
              onClick={() => navigate("/registration")}
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Login);
