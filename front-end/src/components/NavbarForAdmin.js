/* eslint-disable */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function NavbarForAdmin(props) {
    // const auth = localStorage.getItem("user");
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/");       //video13 to clear bug, as useNavigate re-renders
    }
    return (
        <div className="nav-container">
            <div className="cb-logo-container">
                <img src="../ASSETS/Frame 21.svg" className="cb-logo-container-img" alt="" />
            </div>

            


            <div className="profile-container">
                <div className="student-name-and-arrow-container">
                <Link to="/signup" className="signin-signup-button"  onClick={logout}>Logout</Link>
                    {/* <p style={{ "marginTop": "9.5%", "display": "flex" }}>{props.navbarName}</p>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle id="dropdown-custom-1" style={{ "backgroundColor": "white", "padding": "0", "width": "22px", "border": "none" , "display":"flex", "flexDirection":"row"}}>
                        <p style={{ "marginTop": "9.5%", "display": "flex" }}>Logout</p>
                            <img src="../ASSETS/Keyboard arrow down.svg" alt="" style={{ "width": "100%" }} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item eventKey="1" onClick={logout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}


                </div>
                {/* <img src="../ASSETS/10.svg" alt="" /> */}
            </div>


        </div>
    );
}

export default NavbarForAdmin;