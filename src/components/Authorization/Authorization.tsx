import * as React from 'react';
import Login from "../Login/Login";
import {useContext} from "react";
import {Context} from "../../main";
import {observer} from "mobx-react-lite";
import Profile from "../Profile/ProfileUser.tsx";

const Authorization = () => {
    const {store} = useContext(Context)
    return (
        <div>
            {store.isAuth && store.isLogin ? <Profile/> : <><Login/></>}
        </div>
    );
};

export default observer(Authorization);
