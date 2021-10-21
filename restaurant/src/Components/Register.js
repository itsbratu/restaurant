import React from 'react'
import {useState} from 'react'
import {registerPerson} from '../Utils/Register/RegisterValidation'
import {renderNickErr , renderNameErr , renderPassErr , renderMailErr} from '../Utils/Register/RegErrorRender'

const Register = ()=>{

    const [nick , setNick] = useState('');
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [pass , setPass] = useState('');
    const [rePass , setRePass] = useState('');
    const [email , setEmail] = useState('');
    const [invalidRegister , setInvalidRegister] = useState({errNick : '*' , errFirstName : '*' , errLastName : '*' , errPass : '*' , errRePass : '*' , errEmail : '*'});

    return(
        <container className = 'register-container'>
            <div className = 'register-header'>
                <h1>Register</h1>
            </div>
            <div className = 'register-form'>
                <label for="nickname">
                    <i class="fas fa-id-card icon-color"></i> Nickname:
                    {renderNickErr(invalidRegister)}
                </label>
                <input id="nickname" type = "text" value = {nick} onChange = {(e)=>setNick(e.target.value)}/>
                <label for="firstName">
                    <i class="fas fa-user icon-color"></i> First name:
                    {renderNameErr(invalidRegister , 'errFirstName')}
                </label>
                <input id="firstName" type = "text"  value = {firstName} onChange = {(e)=>setFirstName(e.target.value)}/>
                <label for="lastName">
                    Last name:
                    {renderNameErr(invalidRegister , 'errLastName')}
                </label>
                <input id="lastName" type = "text" value = {lastName} onChange = {(e)=>setLastName(e.target.value)}/>
                <label for="pass">
                    <i class="fas fa-key icon-color"></i> Password:
                    {renderPassErr(invalidRegister , 'errPass')}
                </label>
                <input id="pass" type = "password" value = {pass} onChange = {(e)=>setPass(e.target.value)}/>
                <label for="confirmPass">
                    Confirm password:
                    {renderPassErr(invalidRegister , 'errRePass')}
                </label>
                <input id="confirmPass" type = "password" value = {rePass} onChange = {(e)=>setRePass(e.target.value)}/>
                <label for="email">
                    <i class="fas fa-envelope-open icon-color"></i> Email:
                    {renderMailErr(invalidRegister , 'errEmail')}
                </label>
                <input id="email" type = "email" value = {email} onChange = {(e)=>setEmail(e.target.value)}/>
            </div>
            <button className = 'register-btn' onClick = {()=>registerPerson(nick , firstName , lastName , pass , rePass , email , setInvalidRegister)}>Submit</button>
        </container>
    );
}

export default Register;