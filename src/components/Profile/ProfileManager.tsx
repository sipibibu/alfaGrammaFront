import styles from "./profile.module.css";
import avatar from "./Avatar.png";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../rootStoreContext.ts";
import LogoutButton from "./LogoutButton.tsx";
import { Helmet } from "react-helmet";
import Loading from "../Loading/Loading.tsx";

const ProfileManager = () => {
  const { userStore, profileManagerStore } = useStores();
  const { name, surname, login } = userStore.manager;
  const additionalDataManagerServer = userStore.manager.additionalData;
  const [mode, setMode] = useState("display");
  const [companyName, setCompanyName] = useState("");
  const [description, setDiscription] = useState("");

  useEffect(() => {
    userStore.getAccount();
  }, [userStore]);

  if (!userStore.manager.role) {
    return <Loading />;
  }

  return (
    <div className={styles.profile}>
      <Helmet>
        <title>
          {name} {surname}
        </title>
      </Helmet>
      <div className={styles.bottomMenu}>
        <img src={avatar} className={styles.image} alt="profile image" />
        {mode == "edit" ? (
          <input
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder={
              additionalDataManagerServer?.companyName
                ? additionalDataManagerServer?.companyName
                : "название компании"
            }
          />
        ) : (
          <p className={styles.name}>
            {additionalDataManagerServer?.companyName}
          </p>
        )}
        <div>
          <h3 className={styles.ageTitle}>Представитель</h3>
          <div>
            {name} {surname}
          </div>
        </div>
        <div>
          <h3 className={styles.educationTitle}>Эл. почта</h3>
          <div>{login}</div>
        </div>
        {mode == "edit" ? (
          <button
            className={styles.whatUseEditBtn}
            onClick={() => {
              setMode("display");
              profileManagerStore.updateProfile(companyName, description);
            }}
          >
            сохранить
          </button>
        ) : (
          <button
            className={styles.whatUseEditBtn}
            onClick={() => setMode("edit")}
          >
            редактировать
          </button>
        )}
        <LogoutButton />
      </div>
      <div className={styles.content}>
        <h3 className={styles.whatUseTitle}>Описание</h3>
        {mode == "edit" ? (
          <input
            placeholder={additionalDataManagerServer?.description}
            value={description}
            onChange={(e) => setDiscription(e.target.value)}
          />
        ) : (
          <div>{additionalDataManagerServer?.description}</div>
        )}
      </div>
    </div>
  );
};

export default observer(ProfileManager);
