import React from 'react'

const RegisterSection = (props) => {
    return(
        <div className = "bg-home-section bg-cover filter grayscale-70 bg-center w-11/12 h-screen rounded-full mt-20 relative">
            {props.logged==null && <div className = "absolute left-1/2 border-2 border-black rounded h-full"></div>}
            {props.logged==null && <div className = "flex flex-row justify-evenly w-full absolute top-1/2">
                <button 
                    className = "text-5xl font-artistic mr-32 transition duration-500 ease-in-out transform hover:scale-150"
                    onClick = {()=>{props.routing.push('./login')}}> 
                    Login
                </button>
                <button 
                    className = "text-5xl font-artistic ml-32 transition duration-500 ease-in-out transform hover:scale-150"
                    onClick = {()=>{props.routing.push('./register')}}>
                    Register
                </button>
            </div>}
    </div>  
    )
}

export default RegisterSection;