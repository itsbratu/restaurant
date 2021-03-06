import React from 'react'

const InputField = (props) =>{

    const TypeSwitch = (type)=>{
        if(type === 'Password' || type === 'Confirm Password'){
            return 'password';
        }else{return 'text'};
    }

    return(
        <input className = "sm:h-6" id = {props.id} type = {TypeSwitch(props.id)} value = {props.value} onChange = {(e) => props.setField(e.target.value)} style = {props.errMsg ? {border : "4px solid red"} : {}}/>
    )
}

export default InputField;