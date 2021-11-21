import React, { useEffect } from 'react'
import {useState} from 'react'
import { useHistory } from 'react-router'
import {registerPerson} from './logic'
import Field from '../RegisterSubComp/Field'
import { FIELDS } from './constants'
import { ROUTES_WITHOUT_HOMEPAGE } from './constants'
import Axios from "axios"

const Register = (props)=>{

    const [nick , setNick] = useState('');
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [pass , setPass] = useState('');  
    const [rePass , setRePass] = useState('');
    const [email , setEmail] = useState('');
    const [users , setUsers] = useState([]);
    const [redirect , setRedirect] = useState(false);
    const [invalidRegister , setInvalidRegister] = useState({nick : '' , firstName : '' , lastName : '' , pass : '' , rePass : '' , email : ''});

    useEffect(()=>{
        Axios.get("http://localhost:4000/all")
        .then(response =>{
            setUsers(response.data);
        })
        .catch(error =>{
            console.log(error);
        })
    } , [])

    function getErrorMessage(value){
        return invalidRegister[value];
    }

    let routing = useHistory();
    const currentLocation = props.location.pathname;
    if(ROUTES_WITHOUT_HOMEPAGE[currentLocation]) return null;
    {redirect && routing.push('./login')}

    return(
        <container className = 'register-container'>
            {console.log(users)}
            <div className = 'register-img-container'>
                <img src='/images/logo_register.jpg' className = "register-img"></img>
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