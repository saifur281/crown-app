import React from "react";
import InputField from "../input-feild/input-field";
import {signInWithGoogle,auth} from "../../firebase/firebase";
import "./login.css";


class Login extends React.Component{

    state={
        email : "",
        password : ""
    }

    handleSubmit = async(event) => {

        event.preventDefault();

        const {email, password} = this.state;

        try{

            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: "", password: ""})
        }
        catch(err){
            console.log(err)
        }

    }


    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({[name]:value})
    }



    render(){

        return(
            <div className="u-login">
            

            <form onSubmit={this.handleSubmit}>
            
            <InputField 
                type="text"
                name="email"
                placeholder="Your Email"
                handleChange={this.handleChange}
                value={this.state.email}

            />

            <InputField 
                type="password"
                name="password"
                placeholder="Password"
                handleChange={this.handleChange}
                value={this.state.password}

            />

            <div className="btn-container">


                <button className="login-btn">
                
                <i className="fas fa-sign-in-alt"></i>
                Login</button>


                <button onClick={signInWithGoogle} className="google-btn">
                <i className="fab fa-google"></i>
                 GOOGLE SIGN IN
                </button>
           
            </div>


            </form>
            </div>
        )
    }
}

export default Login;