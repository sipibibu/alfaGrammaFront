import * as React from 'react';
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

const Authorization = () => {
    return (
        <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
            <Login/>
            <Registration/>
        </div>
    );
};

export default Authorization;
