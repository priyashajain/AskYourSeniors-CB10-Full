/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // useEffect(() => {
    //     const auth = localStorage.getItem("user");
    //     if (auth) {
    //         navigate('/ask-your-doubts');          //useNavigate re-renders too
    //     }
    // });

    // const collectData = (event) => {
    //     console.log(email, password);
    //     event.preventDefault();
    // }

    const collectData = async (event) => {
        // console.log(email, password);
        event.preventDefault();                                //connecting react to backend 
        let result = await fetch('http://localhost:5000/register', {                 //this result gets the value of res.send()
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();
        // console.log(result);

        localStorage.setItem("user",JSON.stringify(result));  //to save the sign up info in local storage, check in Inspect->Application->Local Storage, even after closing tab and reopening, data stays
        if(result){                       //if we got a proper result, redirect (using navigate from useNavigate in react-roter-dom) to home page after submit is pressed
            // const auth = localStorage.getItem('user');
            navigate(`/details/${result._id}`);
            // navigate("/details");
            console.log(result._id);
        }

        
        // if(result){                       //if we got a proper result, redirect (using navigate from useNavigate in react-roter-dom) to home page after submit is pressed
        //     localStorage.setItem("user",JSON.stringify(result));  //to save the sign up info in local storage, check in Inspect->Application->Local Storage, even after closing tab and reopening, data stays
        //     // const auth = localStorage.getItem('user');
        //     navigate(`/details/${result._id}`);
        //     // navigate("/details");
        //     console.log(result._id);
        // }
       
    }

    return (
        <div>

            <div>
                <img src="../ASSETS/leftframe1.svg" alt="" height="auto" width="40%" />
            </div>
            <div class="sign-in-button">
                <button>SIGN IN</button>
            </div>
            <div class="sign-up-button">
                <a href="signup.html"><button>SIGN UP</button></a>
            </div>

            <div class="signupFrm">
                <form action="" class="form">
                    <center><h1>Welcome!</h1></center>
                    <label for="">Email</label>
                    <div class="inputContainer">

                        <input
                            type="text"
                            class="input"
                            placeholder="Enter Email"
                            name="email"
                            value={email}
                            onChange={(event) => { setEmail(event.target.value) }}
                        />
                        <label for="" class="label"><i class="fa fa-envelope" aria-hidden="true"> Enter Email</i></label>

                    </div>
                    <label for="">Password</label>
                    <div class="inputContainer">

                        <input
                            type="text"
                            class="input"
                            placeholder="a"
                            name="password"
                            value={password}
                            onChange={(event) => { setPassword(event.target.value) }}
                        />
                        <label for="" class="label"><i class="fas fa-lock" aria-hidden="true"> Enter Password</i></label>
                    </div>

                    {/* <label for="">Confirm Password</label>
                    <div class="inputContainer">

                        <input type="text" class="input" placeholder="a" />
                        <label for="" class="label"><i class="fas fa-lock" aria-hidden="true"> Confirm Password</i></label>
                    </div> */}

                    {/* <input type="submit" class="submitBtn" value="Sign In" /> */}
                    <button class="submitBtn" onClick={collectData}>Sign Up</button>
                    <center><h3 class="sign-in-text">- Or sign in with -</h3></center>
                    <center><i class="fa-brands fa-google"></i></center>
                </form>

            </div>

        </div>
    );
}

export default SignUp;