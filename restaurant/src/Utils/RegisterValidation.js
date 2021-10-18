import React from 'react'

export const nickRegex = /^[^0-9]\w+$/;
export const nameRegex = /^[a-zA-Z,.'-]+$/;


function checkNick(nickName , errorAttrs){
    if((nickRegex.test(nickName) == false) && (nickName.length < 5 || nickName.length > 15)){
        errorAttrs.errNick = 'INVALID_NICK';
        return;
    }else if(nickName.length < 5 || nickName.length > 15){
        errorAttrs.errNick = 'INVALID_LENGTH';
        return;
    }else if(nickRegex.test(nickName) == false){
        errorAttrs.errNick = 'INVALID_MATCH';
        return;
    }else{return;}
}

function checkName(name , errorAttrs , nameType){
    if((nameRegex.test(name) == false) && (name.length < 2)){
        if(nameType == 'firstname'){
            errorAttrs.errFirstName = 'INVALID_FIRSTNAME';
            return;
        }else{errorAttrs.errLastName = 'INVALID_LASTNAME';return;};
    }else if(nameRegex.test(name) == false){
        if(nameType == 'firstname'){
            errorAttrs.errFirstName = 'INVALID_MATCH';
            return;
        }else{errorAttrs.errLastName = 'INVALID_MATCH';return;};
    }else if(name.length < 2){
        if(nameType = 'firstname'){
            errorAttrs.errFirstName = 'INVALID_LENGTH';
            return;
        }else{errorAttrs.erLastName = 'INVALID_LENGTH';return;};
    }else{return;}
}

function checkPass(pass , errorAttrs , passType){
    
}

export function registerPerson(nick , firstName , lastName , pass , rePass , email , setInvalidRegister){
    const errorAttrs = {errNick : '#' , 
    errFirstName : '#' , 
    errLastName : '#' , 
    errPass : '#' , 
    errRePass : '#' , 
    errEmail : '#'};
    checkNick(nick , errorAttrs);
    checkName(firstName , errorAttrs , 'firstname');
    checkName(lastName , errorAttrs , 'lastname');
    setInvalidRegister(errorAttrs);
}