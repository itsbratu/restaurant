import React, { useReducer } from 'react'
import Axios from 'axios'
import LoginImage from '../Images/logo_login.jpg'
import validateLoginInput from '../Utils/Register/Login/LoginValidation'
import { useState } from 'react';
import { useEffect } from 'react';

const Login = ()=>{

    const [email , setEmail] = useState('');
    const [pass , setPass] = useState('');
    const [users , setUsers] = useState([]);
    const [invalidInput , setInvalidInput] = useState(false);

    useEffect(()=>{
        Axios.get("http://localhost:4000/all")
        .then(response =>{
            setUsers(response.data);
        })
        .catch(error =>{
            console.log(error);
        })
    } , [])

    function clearInputFields(){
        document.getElementById("input-mail").value = "";
        document.getElementById("input-pass").value = "";
    }


    return(
        <div className = "login-form">
            {invalidInput && clearInputFields()}
            <div className = "login-img-container">
                <img src = {LoginImage} alt = "login" className = "login-img"></img>
            </div>
            <div className = "login-info-container">
                <label for = "email" className = "login-info-label"><b>Mail:</b></label>
                <input id = "input-mail" type = "text" placeholder = "Enter mail" name = "email" className="login-info-input" onChange = {(e)=>setEmail(e.currentTarget.value)}></input>
                <label for = "password" className = "login-info-label"><b>Password:</b></label>
                <input id = "input-pass" type = "password" placeholder = "Enter password" name = "password" className="login-info-input" onChange = {(e)=>setPass(e.currentTarget.value)}></input>
                {invalidInput && <h1 className = "login-error">Invalid mail or password!</h1>}
                <button type = "submit" className = "login-submit-button" onClick = {() => validateLoginInput({email , pass , users , setInvalidInput})}>Login</button>
            </div>
            <h1>{email} {pass}</h1>
        </div>
    )
}

export default Login;