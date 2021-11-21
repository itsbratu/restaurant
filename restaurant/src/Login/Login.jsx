import React from 'react'
import { ROUTES_WITHOUT_HOMEPAGE } from '../Register/constants'
import Axios from 'axios'
import { useState , useEffect} from 'react';
import { useHistory } from 'react-router'
import { setCookie } from 'cookies'
import './login.css'

function validateLoginInput({email, pass, setRedirect, clearInputFields, setInvalidInput}){
    Axios.post("http://localhost:4000/login" , {
        mail : email,
        pass : pass
    }).then((response) => {
        console.log(response.data);
        switch(response.data){
            case true:
                setCookie("email" , email , 365);
                setRedirect(true);
                break;
            default:
                clearInputFields();
                setInvalidInput(true);
                break;
        }
    })
}

function clearInputFields(){
    document.getElementById("input-mail").value = "";
    document.getElementById("input-pass").value = "";
}

const Login = (props) => {
    const [email , setEmail] = useState('');
    const [pass , setPass] = useState('');
    const [users , setUsers] = useState([]);
    const [invalidInput , setInvalidInput] = useState(false);
    const [redirect , setRedirect] = useState(false);

    useEffect(()=>{
        Axios.get("http://localhost:4000/all")
        .then(response =>{
            setUsers(response.data);
        })
        .catch(error =>{
            console.log(error);
        })
    } , [])

    let routing = useHistory();
    const currentLocation = props.location.pathname;
    if(ROUTES_WITHOUT_HOMEPAGE[currentLocation]) return null;
    {redirect && routing.push('./home')}
    
    return(
        <div className="h-screen bg-gradient-to-b from-blue-300 to-blue-500 flex flex-col md:flex-row items-center justify-evenly">
            <div className = "h-80 w-1/3 max-w-lg p-4 flex flex-col">
                <label for = "email" className = "login-info-label"><b>Mail:</b></label>
                <input id = "input-mail" type = "text" placeholder = "Enter mail" name = "email" className="p-2 border-2 border-green-500" onChange = {(e)=>setEmail(e.currentTarget.value)}></input>
                <label for = "password" className = "login-info-label"><b>Password:</b></label>
                <input id = "input-pass" type = "password" placeholder = "Enter password" name = "password" className="p-2 border-2 border-green-500" onChange = {(e)=>setPass(e.currentTarget.value)}></input>
                <div className="flex flex-col items-center justify-evenly h-full w-full">
                    {
                        invalidInput &&
                        <h1 className = "login-error">Invalid mail or password!</h1>
                    }
                    <button
                        type = "submit"
                        className = "login-submit-button flex items-center text-3xl justify-center h-12 w-1/2 text-white cursor-pointer"
                        onClick = {() => validateLoginInput({email , pass , users , setRedirect , setInvalidInput , clearInputFields})}>
                            Login
                    </button>
                </div>

            </div>
            <div className="h-16 w-16 md:h-64 md:w-64 flex items-center justify-center">
                <img src="/images/logo_login.jpg"  alt = "login" className = "rounded-full"/>
            </div>
        </div>
    )
}

export default Login;