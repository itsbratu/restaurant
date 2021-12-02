import React from 'react'

const InputAddress = (props) => {
    return(
        <div className = "h-1/6 w-3/4">
            <label className = "h-1/3 w-1/2 font-general-font font-extrabold">{props.name}{((props.name === "Apartment") && "*")} : </label>
            <input id = {props.id} className = {`font-extrabold ${!props.invalidInput && 'border-black'} font-general-font border-4 border-solid ${props.invalidInput && 'border-black'} ${props.invalidInput && `border-red-600`} h-1/2 w-full bg-gray-200 text-2xl text- font-general-font shadow-xl pl-5`}></input>
        </div>
    )
}

export default InputAddress;