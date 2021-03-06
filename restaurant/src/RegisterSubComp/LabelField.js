import React from 'react'
import { stringSplit } from '../Register/constants';

const LabelField = (props) =>{

    const stringSplit = (errString)=>{
        return errString.split('\n').map(str => <h2 className = 'register-invalid-input'>{str}</h2>);
    }

    var capitalizedType = props.type.charAt(0).toUpperCase() + props.type.slice(1);
    return(
        <label for = {props.type}>
            <i class = {props.icon}></i> {capitalizedType}:
            <p className = "font-general-font text-xs sm:text-tiny">{stringSplit(props.errMsg)}</p>
        </label>
    )
}

export default LabelField;