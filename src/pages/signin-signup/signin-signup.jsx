import React from "react";
import Login from "../../components/login/login";
import Register from "../../components/register/register";

import "./signin-signup.css";

const SigninSignupPage = () => {


    return(
        <div className="signin-signup">

        <div className="login">
        <h2 className="l-title">Login</h2>

        <span className="l-subtitle">I already hvae an account!</span>
          <Login />

        </div>

        <div className="register">
         <h2 className="l-title">Register</h2>
         <span className="l-subtitle">Create an account for free!</span>
          <Register />
        </div>
            
        </div>
    )
}

export default SigninSignupPage;