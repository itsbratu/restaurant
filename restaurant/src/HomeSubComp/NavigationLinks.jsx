import React from 'react'

const NavigationLinks = (props) =>{
    return(
        <ul className = "flex justify-evenly items-center flex-grow mx-20">
            <li className = "font-artistic text-3xl text-black transition duration-500 ease-in-out transform hover:scale-125 motion-reduce:transform-none"><a href='#info'>Info</a></li>
            <li className = "font-artistic text-3xl text-black transition duration-500 ease-in-out transform hover:scale-125 motion-reduce:transform-none"><a href='#menu' className = "font-artistic text-3xl text-black">Menu</a></li>
            <li className = "font-artistic text-3xl text-black transition duration-500 ease-in-out transform hover:scale-125 motion-reduce:transform-none"><a href='#reviews' className = "font-artistic text-3xl text-black">Reviews</a></li>
            <li className = "font-artistic text-3xl text-black transition duration-500 ease-in-out transform hover:scale-125 motion-reduce:transform-none"><a href='#contact' className = "font-artistic text-3xl text-black">Contact</a></li>
            {props.logged!=null && <li className = "font-artistic text-3xl text-black transition duration-500 ease-in-out transform hover:scale-125 motion-reduce:transform-none"><button onClick = {() => {props.clearCookies()}}>Logout</button></li>}
        </ul>
    );
}

export default NavigationLinks;