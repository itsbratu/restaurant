import React from 'react'
import { ROUTES_WITHOUT_HOMEPAGE } from '../Register/constants'
import { useHistory } from 'react-router'
import { useState } from 'react'
import { eraseCookie , getCookie } from 'cookies'
import Line from 'Line/Line'
import NavBar from 'HomeSubComp/NavBar'
import RegisterSection from 'HomeSubComp/RegisterSection'
import Info from 'Info/Info'
import MenuA from 'Menu/MenuA'
import MenuB from 'Menu/MenuB'
import EmptySection from 'Menu/EmptySection'
import Reviews from 'Reviews/Reviews'
import Contact from 'Contact/Contact'
import Tippy from '@tippyjs/react'

const Home = (props)=>{

    const [showSideBar , setShowSideBar] = useState(false);
    const [loggedUser , setLoggedUser] = useState(null);

    const clearCookies = () =>{
        eraseCookie("email");
        setLoggedUser(null);
    }
    
    if(getCookie("email") != null && loggedUser == null){
        setLoggedUser(getCookie("email"));
    }

    let routing = useHistory();
    const currentLocation = props.location.pathname;
    if(ROUTES_WITHOUT_HOMEPAGE[currentLocation]) return null;

    function swtichRenderSidebar(showSideBar){
        switch(showSideBar){
            case true:
                return(
                    <Tippy 
                    content = {<div className = "flex items-center justify-end"><button onClick = {() => {setShowSideBar(!showSideBar)}}><i class="fas fa-arrow-left fa-2x"></i></button></div>} 
                    interactive = "true" 
                    placement = "right" 
                    duration = {0}>
                        <div className = "fixed top-1/4 w-1/12 h-3/5 flex flex-col justify-evenly pl-5 py-3 z-50 bg-gray-100 rounded-r-full">
                            <a href = "#home" className = "cursor-pointer w-1/2 animation ease-in-out duration-500 transform hover:scale-125"><img src = "images/home.png"/></a>
                            <a href = "#menu" className = "cursor-pointer w-1/2 animation ease-in-out duration-500 transform hover:scale-125"><img src = "images/menu.png"/></a>
                            <a href = "#rating" className = "cursor-pointer w-1/2 animation ease-in-out duration-500 transform hover:scale-125"><img src = "images/rating.png"/></a>
                            <img className = "w-1/2 animation ease-in-out duration-500 transform hover:scale-125 cursor-pointer" onClick = {()=>{routing.push('./cart')}} src = "images/cart.png"/>
                            <a href = "#contact" className = "cursor-pointer w-1/2 animation ease-in-out duration-500 transform hover:scale-125"><img src = "images/contact.png"/></a>
                            <a className = "cursor-pointer w-1/2 animation ease-in-out duration-500 transform hover:scale-125"><img src = "images/logout.png" onClick = {() => {clearCookies()}}/></a>
                        </div>
                    </Tippy>
                );
            default:
                return(
                    <div className = "fixed top-1/4 w-1/12 h-3/5 flex justify-start pl-5 rounded-r-full z-50">
                        <button onClick = {() => {setShowSideBar(!showSideBar)}}><i class="fas fa-arrow-right fa-3x"></i></button>
                    </div>
                )
        }
    }

    return( 
        <div id = "home">
            {loggedUser!=null && swtichRenderSidebar(showSideBar)}
            <div className = "grid gap-5 ml-10 my-5 p-0 max-w-full">
                <NavBar logged = {loggedUser} clearCookies = {clearCookies}/>
                <RegisterSection routing = {routing} logged = {loggedUser}/>
                {loggedUser!=null && 
                <>
                    <Line/>
                    <Info/>
                    <Line/>
                    <EmptySection/>
                    <MenuA/>
                    <EmptySection/>
                    <MenuB/>
                    <EmptySection/>
                    <Line/>
                    <Reviews/>
                    <Line/>
                    <Contact/>
                </>}

            </div>
            
        </div>

    );
}

export default Home;