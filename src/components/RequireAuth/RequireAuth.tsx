import * as React from 'react';
import {useContext} from "react";
import {Context} from "../../main";
import {observer} from "mobx-react-lite";
import Profile from "../Profile/ProfileUser.tsx";
import Registration from "../Registration/Registration.tsx";

const RequireAuth = () => {
    const {store} = useContext(Context)
    const renderByRole = (role: string) => {
        switch (role){
            case "Respondent":
                return
        }
    }
    return (
        store.user.role == "Respondent"
    );
};

export default observer(RequireAuth);
