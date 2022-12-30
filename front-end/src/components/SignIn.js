/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // useEffect(()=>{
    //     const auth = localStorage.getItem("user");
    //     if(auth){
    //         navigate('/');          //useNavigate re-renders too
    //     }
    // });


    const handleLogin = async (event) => {                     //fetch returns promise, therefore make this async
        // console.log(email, password);
        event.preventDefault(); 
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),    //this is sent to req.body, hv to stringify it to send
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();            //use .json() as result is originally readstream, hv to covert it to json format, used await as .json() returns await
        console.log(result);

        if (result.email) {
            let userSavedInLocalStorage = {
                _id: result._id,
                email: result.email,
                isAdmin: result.isAdmin             //added for admin routing
            };
            // localStorage.setItem("user", JSON.stringify(result));
            localStorage.setItem("user", JSON.stringify(userSavedInLocalStorage));
            // let resultUser = {_id: JSON.parse(result)._id, email: JSON.parse(result).email};
            // localStorage.setItem("user", JSON.stringify(resultUser));
            if(result.isAdmin === true){
                navigate("/admin");
            }
            else {
                navigate("/ask-your-doubts");
            }
                
            
            // navigate("/ask-your-doubts");
        }
        else {
            alert("Please enter correct details!");
        }
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
                    <center><h1>Welcome Back!</h1></center>
                    <label for="">Email</label>
                    <div class="inputContainer">

                        <input 
                            type="text" 
                            class="input" 
                            placeholder="Enter Email" 
                            name="name" 
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

                    <button class="submitBtn" onClick={handleLogin}>Sign In</button>
                    <center><h3 class="sign-in-text">- Or sign in with -</h3></center>
                    <center><i class="fa-brands fa-google"></i></center>
                </form>

            </div>

        </div>
    );
}

export default SignIn;