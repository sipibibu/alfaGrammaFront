import { Outlet } from "react-router";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TopMenuManager from "../TopMenu/TopMenuManager.tsx";
import { observer } from "mobx-react-lite";
import { useStores } from "../../rootStoreContext.ts";
import { Role } from "../../const.ts";
import TopMenuRespondent from "../TopMenu/TopMenuRespondent.tsx";

const Layout = () => {
  const { userStore } = useStores();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {userStore.role === Role.Respondent ? (
        <TopMenuRespondent />
      ) : (
        <TopMenuManager />
      )}
      <Outlet />
    </LocalizationProvider>
  );
};

export default observer(Layout);
