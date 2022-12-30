import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomeCorrect.css";
import Navbar from "./components/Navbar";
import NavbarForHome from "./NavbarForHome";
import Chatbot from "./components/Chatbot";

const HomeCorrect = () => {
    // const auth = localStorage.getItem('user');

    // const [navbarName, setNavbarName] = useState("");

    // useEffect(() => {
    //     getUserById();

    // });

    // const getUserById = async () => {
    //     const auth = localStorage.getItem("user");
    //     const idFetched = JSON.parse(auth)._id;

    //     let result = await fetch(`http://localhost:5000/user/${idFetched}`);
    //     result = await result.json();
    //     setNavbarName(`${result.fName} ${result.lName}`);
    //     // setUser(result);
    //     console.log(navbarName);
    // }

    return (
        <div>
            <div style={{ "padding": "2% 7% 1% 7%", }}>
                {/* {auth ? <Navbar navbarName={navbarName} /> : <NavbarForHome />} */}
                <NavbarForHome />
            </div>

            <div className="home-main">
                <div className="home-left-area"></div>
                <div className="home-right-area">
                    <p className="welcome-heading">Welcome to</p>
                    <p className="welcome-heading">Ask Your Seniors</p>
                    <p className="welcome-content">One place for all your queries</p>
                </div>

            </div>

            <Chatbot />
        </div>
    )
}

export default HomeCorrect;