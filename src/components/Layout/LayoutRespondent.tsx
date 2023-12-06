import TopMenuRespondent from '../TopMenu/TopMenuRespondent.tsx';
import {Outlet} from 'react-router';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

export const LayoutRespondent = () => {

  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TopMenuRespondent />
        <Outlet/>
      </LocalizationProvider>
  );
}
