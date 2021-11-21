import React from 'react'
import { ROUTES_WITHOUT_HOMEPAGE } from '../Register/constants'
import { useHistory } from 'react-router'
import { useState } from 'react'
import { eraseCookie , getCookie } from 'cookies'
import NavBar from 'HomeSubComp/NavBar'
import RegisterSection from 'HomeSubComp/RegisterSection'

const Home = (props)=>{

    const clearCookies = () =>{
        eraseCookie("email");
        setLoggedUser(null);
    }

    const [loggedUser , setLoggedUser] = useState(null);
    
    if(getCookie("email") != null && loggedUser == null){
        setLoggedUser(getCookie("email"));
    }

    let routing = useHistory();
    const currentLocation = props.location.pathname;
    if(ROUTES_WITHOUT_HOMEPAGE[currentLocation]) return null;

    return( 
        <div className = "grid gap-5 ml-10 my-5 p-0 box-border max-w-full overflow-hidden">
            <NavBar logged = {loggedUser} clearCookies = {clearCookies}/>
            <RegisterSection routing = {routing} logged = {loggedUser}/>
        </div>
    );
}

export default Home;