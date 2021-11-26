import React from 'react'
import NavigationLinks from './NavigationLinks';
import NavigationLogo from './NavigationLogo';

const NavBar = (props) => {
    return(
        <div className = "w-screen h-20 bg-transparent">
            <div className = "flex flex-row justify-evenly">
                <NavigationLogo />
                <NavigationLinks logged = {props.logged} clearCookies = {props.clearCookies}/>
            </div>
        </div>
    )
}

export default NavBar;