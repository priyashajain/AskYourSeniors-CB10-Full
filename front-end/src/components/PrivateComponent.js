/* eslint-disable */
// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import SignUp from "./SignUp";

// const PrivateComponent = () => {

//     const auth = localStorage.getItem('user');
//     return (
//         auth ? <Outlet /> : <Navigate to="signup" />
//     );

//     // const auth = localStorage.getItem("user");
//     // const userIsAdmin = JSON.parse(auth).isAdmin;
//     // return (
//     //     (userIsAdmin === false) ? <Outlet /> : <Navigate to="/signup" />
//     // );
// }

// export default PrivateComponent;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = ()=>{
    const auth = localStorage.getItem("user");
    const userIsAdmin = JSON.parse(auth).isAdmin;
    return (
        (userIsAdmin === false) ? <Outlet /> : <Navigate to="signin" />
    );
}

export default PrivateComponent;