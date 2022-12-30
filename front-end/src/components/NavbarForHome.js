/* eslint-disable */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function NavbarForHome(props) {
  // const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");       //video13 to clear bug, as useNavigate re-renders
  }
  return (
    <div className="nav-container-for-home">
      <div className="cb-logo-container">
        <img src="../ASSETS/Frame 21.svg" className="cb-logo-container-img" alt="" />
      </div>

      <div className="nav-items-container">
        <ul>
          {/* <li><a href="#" className="ayd">Ask Your Doubts</a></li>
              <li><a href="Leaderboard\Leaderboard.html" className="leaderboard">Leaderboard</a></li>
              <li><a href="" className="about">About</a></li>
              <li><a href="New\index.html" className="quiz">Quiz</a></li> */}

          <li><Link to="/ask-your-doubts" className="navbar-link-style">Ask Your Doubts</Link></li>
          <li><Link to="/leaderboard" className="navbar-link-style">Leaderboard</Link></li>
          <li><Link to="/" className="navbar-link-style">About</Link></li>
          {/* <li><Link to="/" className="navbar-link-style">Quiz</Link></li> */}
        </ul>
      </div>

      {/* <div className="profile-container">
            <div className="student-name-and-arrow-container">
              <p>{props.navbarName}</p>
              <img src="../ASSETS/Keyboard arrow down.svg" alt="" />
            </div>

            <img src="../ASSETS/10.svg" alt="" />
          </div> */}

      <div className="profile-container-for-home">
        {/* <div className="student-name-and-arrow-container">
          <p style={{ "marginTop": "9.5%", "display": "flex" }}>{props.navbarName}</p>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle id="dropdown-custom-1" style={{ "backgroundColor": "white", "padding": "0", "width": "22px", "border": "none" }}>

              <img src="../ASSETS/Keyboard arrow down.svg" alt="" style={{ "width": "100%" }} />
            </Dropdown.Toggle>
            <Dropdown.Menu >
              <Dropdown.Item eventKey="1" onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


        </div>
        <img src="../ASSETS/10.svg" alt="" /> */}
        <Link to="/signup" className="signin-signup-button">Sign Up</Link>
        <Link to="/signin" className="signin-signup-button">Sign In</Link>
        {/* <button className="signin-signup-button">Sign In</button> */}
      </div>


    </div>
  );
}

export default NavbarForHome;