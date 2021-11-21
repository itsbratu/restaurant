import React from 'react'
import LabelField from './LabelField';
import InputField from './InputField';

const AttributeField = (props)=>{

    return(
        <>
            <LabelField type = {props.type} icon = {props.icon} errMsg = {props.errMsg}/>
            <InputField id = {props.type} value = {props.value} setField = {props.setField} errMsg = {props.errMsg}/>
        </>
    )
}

export default AttributeField;