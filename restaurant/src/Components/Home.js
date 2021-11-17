import React from 'react'
import Logo from '../Images/logo_noodles.png'
import { ROUTES_WITHOUT_HOMEPAGE } from '../Utils/Register/Constants'
import { useHistory } from 'react-router'
import { useState } from 'react'
import { eraseCookie , getCookie } from 'Utils/Cookies'
import NavigationRegister from './HomeSubComp/NavigationRegister'
import NavigationLinks from './HomeSubComp/NavigationLinks'
import NavigationLogo from './HomeSubComp/NavigationLogo'
import HomeCard from './HomeSubComp/HomeCard'
import Info from './Info'
import Menu from './Menu'
import Footer from './Footer'

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
        <div id = 'home' className = 'home-section'>
            <nav className = 'nav-section'>
                <NavigationLogo logo = {Logo}/>
                <NavigationLinks/>
                <NavigationRegister isLogged = {loggedUser != null} logout = {clearCookies}/>
            </nav>
            <div className = 'flex justify-around align-middle min-w-full h-2/4 mt-56'>
                <HomeCard cardType = {"home-card-quality"} icon = {"fas fa-check-double"} text = {"Quality & diversity!"} textColor = {"text-green-500"} color = {"red"}/>            
                <HomeCard cardType = {"home-card-delivery"} icon = {"fas fa-motorcycle"} text = {"Fast & reliable delivery!"} textColor = {"text-purple-800"} color = {"red"}/>
                <HomeCard cardType = {"home-card-service"} icon = {"fas fa-phone"} text = {"Helpful customer service!"} textColor = {"text-yellow-500"} color = {"red"}/>
            </div>
            < >
                {loggedUser!= null && <Info />}
                {loggedUser!= null && <Menu />}
                {loggedUser!= null && <Footer />}
            </>
        </div>
    );
}

export default Home;