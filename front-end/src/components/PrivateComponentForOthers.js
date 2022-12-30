import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponentForOthers = ()=>{
    const auth = localStorage.getItem("user");
    
    return (
        !auth ? <Outlet /> : <Navigate to="ask-your-doubts" />
    );
}

export default PrivateComponentForOthers;