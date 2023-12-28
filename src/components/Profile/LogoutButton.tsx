import styles from "./logout-button.module.css";
import { useStores } from "../../rootStoreContext.ts";
import { useNavigate } from "react-router";

export default function LogoutButton() {
  const { userStore } = useStores();
  const navigate = useNavigate();
  const handleLogout = () => {
    userStore.logout();
    navigate("/login");
  };

  return (
    <button type="button" className={styles.logout} onClick={handleLogout}>
      выйти
    </button>
  );
}
