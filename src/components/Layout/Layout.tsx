import TopMenu from '../TopMenu/TopMenu.tsx';
import {Outlet} from 'react-router';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

export const Layout = () => {

  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TopMenu />
        <Outlet/>
      </LocalizationProvider>
  );
}
