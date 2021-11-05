import React from 'react'
import LoginImage from '../Images/logo_login.jpg'
import { useState } from 'react';

const Login = ()=>{

    const [invalidInput , setInvalidInput] = useState(true);

    return(
        <div className = "login-form">
            <div className = "login-img-container">
                <img src = {LoginImage} alt = "login" className = "login-img"></img>
            </div>
            <div className = "login-info-container">
                <label for = "email" className = "login-info-label"><b>Mail:</b></label>
                <input type = "text" placeholder = "Enter mail" name = "email" className="login-info-input"></input>
                <label for = "password" className = "login-info-label"><b>Password:</b></label>
                <input type = "password" placeholder = "Enter password" name = "password" className="login-info-input"></input>
                {invalidInput && <h1 className = "login-error">Invalid mail or password!</h1>}
                <button type = "submit" className = "login-submit-button">Login</button>
            </div>
        </div>
    )
}

export default Login;