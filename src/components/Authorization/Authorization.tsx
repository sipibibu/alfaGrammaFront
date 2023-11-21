import * as React from 'react';
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import {useContext} from "react";
import {Context} from "../../main";
import {observer} from "mobx-react-lite";
import Profile from "../Profile/Profile";

const Authorization = () => {
    const {store} = useContext(Context)
    return (
        <div>
            {store.isAuth && store.isLogin ? <Profile/> : <><Registration/><Login/></>}
        </div>
    );
};

export default observer(Authorization);
