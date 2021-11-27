import React from 'react'
import { ROUTES_WITHOUT_HOMEPAGE } from '../Register/constants'
import Axios from 'axios'
import { useState , useEffect} from 'react';
import { useHistory } from 'react-router'
import { setCookie } from 'cookies'

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
    {redirect && routing.push('./')}
    
    return(
        <div className="h-screen bg-gradient-to-b from-blue-300 to-blue-500 flex flex-col md:flex-row items-center justify-evenly">
            <div className = "h-80 w-1/3 max-w-lg p-4 flex flex-col">
                <label for = "email" className = "font-general-font"><b>Mail:</b></label>
                <input id = "input-mail" type = "text" placeholder = "Enter mail" name = "email" className="p-2 border-2 border-green-500" onChange = {(e)=>setEmail(e.currentTarget.value)}></input>
                <label for = "password" className = "font-general-font"><b>Password:</b></label>
                <input id = "input-pass" type = "password" placeholder = "Enter password" name = "password" className="p-2 border-2 border-green-500" onChange = {(e)=>setPass(e.currentTarget.value)}></input>
                <div className="flex flex-col items-center justify-evenly h-full w-full">
                    {
                        invalidInput &&
                        <h1 className = "text-red-600">Invalid mail or password!</h1>
                    }
                    <button
                        type = "submit"
                        className = "bg-green-600 font-general-font font-bold flex items-center text-3xl sm:text-lg justify-center h-12 w-1/2 sm:w-2/3 text-white cursor-pointer"
                        onClick = {() => validateLoginInput({email , pass , users , setRedirect , setInvalidInput , clearInputFields})}>
                            Login
                    </button>
                </div>
            </div>
            <div className="w-1/3 md:h-64 md:w-64 lg:h-72 lg:w-72 flex items-center justify-center">
                <img src="/images/login-image.jpeg"  alt = "login" className = "transform scale-125 rounded-full"/>
            </div>
        </div>
    )
}

export default Login;