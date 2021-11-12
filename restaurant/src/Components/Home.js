import React from 'react'
import Logo from '../Images/logo_noodles.png'
import { ROUTES_WITHOUT_HOMEPAGE } from '../Utils/Register/Constants'
import { useHistory } from 'react-router'
import { useState } from 'react'
import { eraseCookie , getCookie } from 'Utils/Cookies'
import NavigationRegister from './HomeSubComp/NavigationRegister'
import NavigationLinks from './HomeSubComp/NavigationLinks'
import NavigationLogo from './HomeSubComp/NavigationLogo'

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
        <div className = 'home-section'>
            <nav className = 'nav-section'>
                <NavigationLogo logo = {Logo}/>
                <NavigationLinks/>
                <NavigationRegister isLogged = {loggedUser != null} logout = {clearCookies}/>
            </nav>
            <div className = 'nav-welcome'>
                &#126;pasterino&#126;
                <button onClick = {() => clearCookies()}>Cool button</button>
            </div>
        </div>
    );
}

export default Home;