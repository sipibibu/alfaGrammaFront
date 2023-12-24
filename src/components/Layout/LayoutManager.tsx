import {Outlet} from 'react-router';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import TopMenuManager from "../TopMenu/TopMenuManager.tsx";

export const LayoutManager = () => {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TopMenuManager/>
            <Outlet/>
        </LocalizationProvider>
    );
}
