/* eslint-disable */
import React from "react";

function Navbar(){
    return(
        <div className="nav-container">
          <div className="cb-logo-container">
            <img src="../ASSETS/Frame 21.svg" className="cb-logo-container-img" alt="" />
          </div>

          <div className="nav-items-container">
            <ul>
              <li><a href="#" className="ayd">Ask Your Doubts</a></li>
              <li><a href="Leaderboard\Leaderboard.html" className="leaderboard">Leaderboard</a></li>
              <li><a href="" className="about">About</a></li>
              <li><a href="New\index.html" className="quiz">Quiz</a></li>
            </ul>
          </div>

          <div className="profile-container">
            <div className="student-name-and-arrow-container">
              <p>Student Name</p>
              <img src="../ASSETS/Keyboard arrow down.svg" alt="" />
            </div>

            <img src="../ASSETS/10.svg" alt="" />
          </div>
        </div>
    );
}

export default Navbar;