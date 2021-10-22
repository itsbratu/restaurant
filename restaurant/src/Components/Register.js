import React from 'react'
import {useState} from 'react'
import {registerPerson} from '../Utils/Register/RegisterValidation'
import Field from './RegisterSubComp/Field'
import { FIELDS } from '../Utils/Register/Constants'

const Register = ()=>{

    const [nick , setNick] = useState('');
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [pass , setPass] = useState('');  
    const [rePass , setRePass] = useState('');
    const [email , setEmail] = useState('');
    const [invalidRegister , setInvalidRegister] = useState({nick : '' , firstName : '' , lastName : '' , pass : '' , rePass : '' , email : ''});

    function getErrorMessage(value){
        return invalidRegister[value];
    }

    return(
        <container className = 'register-container'>
            <div className = 'register-header'>
                <h1>Register</h1>   
            </div>
            <div className = 'register-form'>
                {FIELDS.map((currentField)=>{
                    return(
                        <Field type = {currentField.type} icon = {currentField.icon} value = {eval(currentField.value)}
                        setField = {eval(currentField.setField)} errMsg = {getErrorMessage(currentField.value)}/>
                    )
                })}
            </div>
            <button className = 'register-btn' onClick = {() => registerPerson(nick , firstName , lastName , pass , rePass , email , setInvalidRegister)}>Submit</button>
        </container>    
    );
}

export default Register;