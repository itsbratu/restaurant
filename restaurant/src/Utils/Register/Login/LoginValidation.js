import React from 'react'

export default function validateLoginInput(props){
    props.users.forEach((user)=>{
        if(user.email === props.email && user.pass === props.pass){
            //reRoute
        }else{
            props.setInvalidInput(true);
        }
    })
}