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
        <container className = 'h-screen bg-gradient-to-b from-gray-300 to bg-gray-700 flex flex-col md:flex-row items-center justify-evenly'>
            <div className = "h-3/7 w-1/3 max-w-lg p-4 flex flex-col">
                {FIELDS.map((currentField)=>{
                        return(
                            <Field type = {currentField.type} icon = {currentField.icon} value = {eval(currentField.value)}
                            setField = {eval(currentField.setField)} errMsg = {getErrorMessage(currentField.value)}/>
                        )
                    })}
                <div className = "flex items-center justify-evenly">
                    <button className = 'flex items-center justify-center mt-10 w-1/2 h-3/5 sm:w-2/3 bg-blue-400 font-general-font' onClick = {() => registerPerson(nick , firstName , lastName , pass , rePass , email , users , setInvalidRegister , setRedirect)}>Submit</button>
                </div>
            </div>
            <div className = "flex items-center justify-center w-60 sm:w-28">
                <img src='/images/register-image.jpg' className = "transform scale-75 rounded-full"></img>
            </div>
        </container>    
    );
}

export default Register;