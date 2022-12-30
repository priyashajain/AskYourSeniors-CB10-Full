import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponentForAdmin = ()=>{
    const auth = localStorage.getItem("user");
    if(auth){
        const userIsAdmin = JSON.parse(auth).isAdmin;
    }
    
    return (
        auth ? ((JSON.parse(auth).isAdmin === true) ? <Outlet /> : <Navigate to="signin" />) : <Navigate to="signup" /> 
    );
}

export default PrivateComponentForAdmin;