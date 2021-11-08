import React from 'react'
import RegisterLogo from '../Images/logo_register.jpg'
import {useState} from 'react'
import { useHistory } from 'react-router'
import {registerPerson} from '../Utils/Register/RegisterValidation'
import Field from './RegisterSubComp/Field'
import { FIELDS } from '../Utils/Register/Constants'
import { ROUTES_WITHOUT_HOMEPAGE } from '../Utils/Register/Constants'
import Axios from "axios"

const Register = (props)=>{

    const [nick , setNick] = useState('');
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [pass , setPass] = useState('');  
    const [rePass , setRePass] = useState('');
    const [email , setEmail] = useState('');
    const [users , setUsers] = useState(getEntries());
    const [redirect , setRedirect] = useState(false);
    const [invalidRegister , setInvalidRegister] = useState({nick : '' , firstName : '' , lastName : '' , pass : '' , rePass : '' , email : ''});

    function getErrorMessage(value){
        return invalidRegister[value];
    }

    function getEntries(){
        Axios.get("http://localhost:4000/all").then((response) => {
            setUsers(response.data);
        });
    } 


    let routing = useHistory();
    const currentLocation = props.location.pathname;
    if(ROUTES_WITHOUT_HOMEPAGE[currentLocation]) return null;
    {redirect && routing.push('./login')}

    return(
        <container className = 'register-container'>
            <div className = 'register-img-container'>
                <img src = {RegisterLogo} className = "register-img"></img>
            </div>
            <div className = 'register-form'>
                {FIELDS.map((currentField)=>{
                    return(
                        <Field type = {currentField.type} icon = {currentField.icon} value = {eval(currentField.value)}
                        setField = {eval(currentField.setField)} errMsg = {getErrorMessage(currentField.value)}/>
                    )
                })}
            </div>
            <button className = 'register-btn' onClick = {() => registerPerson(nick , firstName , lastName , pass , rePass , email , users , setInvalidRegister , setRedirect)}>Submit</button>
        </container>    
    );
}

export default Register;