import React from 'react'
import { useHistory } from 'react-router'

const RegisterLinks = (props) =>{

    let routing = useHistory();
    const isLogged = props.isLogged;

    const renderSwitch = (userLogged) =>{
        switch(userLogged){
            case false:
                return(
                    <>
                        <li><a onClick={()=>{routing.push('./login')}}>Login</a></li>
                        <li><a onClick={()=>{routing.push('./register')}}>Register</a></li>        
                    </>
                );
                break;
            default:
                return(
                    <>
                        <li><a onClick={()=>{routing.push('./profile')}}><i class="fas fa-user-alt"></i>Profile</a></li>
                        <li><a onClick = {()=>{props.logout()}}><i class="fas fa-sign-out-alt"></i>Logout</a></li>
                    </>
                );
                break;
        }
    }
    
    return(
        <div className = "nav-register">
            {renderSwitch(isLogged)}
        </div>
    );
}

export default RegisterLinks;