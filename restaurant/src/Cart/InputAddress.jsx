import React from 'react'

const InputAddress = (props) => {
    return(
        <div className = "h-1/6 w-3/4">
            <label className = "h-1/3 w-1/2 font-general-font font-extrabold">{props.name}{((props.name === "Apartment") && "*")} : </label>
            <input className = {`font-extrabold font-general-font border-4 border-solid border-black ${props.invalidInput && `border-red-500`} h-1/2 w-full bg-gray-200 text-2xl text- font-general-font shadow-xl pl-5`} onChange = {(event) => {props.setProperty(event.target.value)}}></input>
        </div>
    )
}

export default InputAddress;