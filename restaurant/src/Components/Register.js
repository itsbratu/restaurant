import React from 'react'
import {useState} from 'react'
import { Person } from '../Utils/Person';
import { registerPerson } from '../Utils/RegisterValidation';

const Register = ()=>{

    const [nick , setNick] = useState('');
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [pass , setPass] = useState('');
    const [rePass , setRePass] = useState('');
    const [email , setEmail] = useState('');
    const [person , setPerson] = useState(new Person('' , '' , '' , '' , ''));
    const [invalidRegister , setInvalidRegister] = useState({errNick : '*' , errFirstName : '*' , errLastName : '*' , errPass : '*' , errRePass : '*' , errEmail : '*'});

    const currentAttrs = () =>{
        return nick + ' ' + firstName + ' ' + lastName + ' ' + pass + ' ' + rePass + ' ' + email;
    }

    const currentErrors = ()=>{
        return invalidRegister.errNick + ' ' + invalidRegister.errFirstName + ' ' + invalidRegister.errLastName + ' ' + invalidRegister.errPass + ' ' + invalidRegister.errRePass + ' ' + invalidRegister.errEmail;
    }

    return(
        <container className = 'register-container'>
            <div className = 'register-header'>
                <h1>Register</h1>
            </div>
            <div className = 'register-form'>
                <label for="nickname">
                    <i class="fas fa-id-card icon-color"></i> Nickname:
                </label>
                <input id="nickname" type = "text" value = {nick} onChange = {(e)=>setNick(e.target.value)}/>
                <label for="firstName">
                    <i class="fas fa-user icon-color"></i> First name:
                </label>
                <input id="firstName" type = "text"  value = {firstName} onChange = {(e)=>setFirstName(e.target.value)}/>
                <label for="lastName">
                    Last name:
                </label>
                <input id="lastName" type = "text" value = {lastName} onChange = {(e)=>setLastName(e.target.value)}/>
                <label for="pass">
                    <i class="fas fa-key icon-color"></i> Password:
                </label>
                <input id="pass" type = "password" value = {pass} onChange = {(e)=>setPass(e.target.value)}/>
                <label for="confirmPass">
                    Confirm password:
                </label>
                <input id="confirmPass" type = "password" value = {rePass} onChange = {(e)=>setRePass(e.target.value)}/>
                <label for="email">
                    <i class="fas fa-envelope-open icon-color"></i> Email:
                </label>
                <input id="email" type = "email" value = {email} onChange = {(e)=>setEmail(e.target.value)}/>
            </div>
            <button className = 'register-btn' onClick = {()=>registerPerson(nick , firstName , lastName , pass , rePass , email , setInvalidRegister)}><i class="fas fa-arrow-right"></i></button>
            <div className = 'output'>
                <h4>{currentAttrs()}</h4>
                <h4>{currentErrors()}</h4>
            </div>
        </container>
    );
}

export default Register;