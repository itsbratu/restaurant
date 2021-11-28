import React from 'react'
const NavBar = (props) => {
    return(
        <div className = "w-screen h-20 bg-transparent">
            <div className = {`flex ${props.logged!=null ? 'justify-around' : 'justify-center'}`}>
                <div className = "text-black pl-2 text-home-logo font-artistic font-bold tracking-widest">
                    Pasterino
                </div>
                {props.logged!=null && <button className = "font-artistic text-3xl" onClick = {() => {props.clearCookies()}}>Logout</button>}
            </div>
        </div>
    )
}

export default NavBar;