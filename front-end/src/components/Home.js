/* eslint-disable */
import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div>

            <header className="header">
                <div className="left">
                    <img src="../ASSETS/Frame 21.png" alt="" />
                    <ul className="navbar">
                        <li><a href="#">Home</a></li>
                        <li><a href="doubts.html">Ask your doubts</a></li>
                        <li><a href="Leaderboard.html">LeaderBoard</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="quiz.html">Quiz</a></li>

                    </ul>
                    <a href="signup.html"><button className="btn">Sign up</button></a>
                    <a href="sign-in.html"><button className="btn">Sign in</button></a>

                </div>
            </header>

            <div className="container1">
                <img src="../ASSETS/leftframe1.svg" alt="" style={{"height": "auto"}} />
            </div>
            <div className="container">
                <h1 style={{ "color": "#3C097D" }}>Welcome to Ask Your Seniors</h1>
                <h3>One place for all your queries</h3>
            </div>
            <div className="container2">
                <img src="../ASSETS/a1.jpg" alt="" />
            </div>

        </div>


        // <div>
        //     <h1>Home page</h1>
        //     <p>This is the home page.</p>
        // </div>
    );
}

export default Home;