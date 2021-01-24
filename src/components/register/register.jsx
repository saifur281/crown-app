import React, { Component } from "react";
import InputField from "../input-feild/input-field";
import "./register.css";
import {auth,createUserProfeleDoc} from "../../firebase/firebase"


class Register extends Component{

    state={

        displayName: "",
        email : "",
        password: "",
        confirmPassword: "",
    }

    handleSubmit = async(event) => {

        event.preventDefault();
        const {displayName,email,password, confirmPassword} = this.state;

        if(password !== confirmPassword){

            alert("password doesn't Match");
            return ;
        }

        try{

            const {user} = await auth.createUserWithEmailAndPassword(
                email, 
                password
            )

            await createUserProfeleDoc(user,{displayName});

            this.setState({
                displayName: "",
                email : "",
                password: "",
                confirmPassword: "",
            });

        }
        catch(err){
            console.log(err)
        }

    }

    handleChange = (event) => {

        const {name, value} = event.target;

        this.setState({[name] : value})
    }



    render(){

        return(
            <div className="u-register">

            <form onSubmit={this.handleSubmit} >
                <InputField 
                    type="text"
                    name="displayName"
                    value={this.state.displayName}
                    handleChange={this.handleChange}
                    placeholder="Display Name"
                    required
                />
                <InputField 
                     type="email"
                    name="email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    placeholder="Email"
                    required
                />
                <InputField 
                    type="password"
                    name="password"
                    value={this.state.password}
                    handleChange={this.handleChange}
                    placeholder="Password"
                    required
                />
                <InputField 
                    type="password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    handleChange={this.handleChange}
                    placeholder="Confirm Password"
                    required
                />


             
                <button type="submit" className="register-btn">Register</button>

                </form>
            </div>
        )
    }
}

export default Register;