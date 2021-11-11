import React from 'react'
import Logo from '../Images/logo_noodles.png'
import { ROUTES_WITHOUT_HOMEPAGE } from '../Utils/Register/Constants'
import { useHistory } from 'react-router'
import { useState } from 'react'
import { eraseCookie , getCookie } from 'Utils/Cookies'
import RegisterLinks from './HomeSubComp/RegisterLinks'

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
                <div className = 'nav-logo'>
                    <img src={Logo} alt = 'noodles' className = 'nav-logo-image'/>
                    <div className = 'nav-logo-text'>
                        <h4>pasterino</h4>
                    </div>
                </div>
                <ul className = 'nav-links'>
                    <li id = 'info_li'><a href='#' id = 'info_a'>Info</a></li>
                    <li id = 'menu_li'><a href='#' id = 'menu_a'>Menu</a></li>
                    <li id = 'reviews_li'><a href='#' id = 'reviews_a'>Reviews</a></li>
                    <li id = 'contact_li'><a href='#' id = 'contact_a'>Contact</a></li>
                </ul>
                <RegisterLinks isLogged = {loggedUser != null} logout = {clearCookies}/>
            </nav>
            <div className = 'nav-welcome'>
                &#126;pasterino&#126;
                <button onClick = {() => clearCookies()}>Cool button</button>
            </div>
        </div>
    );
}

export default Home;