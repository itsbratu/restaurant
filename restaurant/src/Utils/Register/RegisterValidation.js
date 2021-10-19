
import {nickRegex , nameRegex , passRegex , mailRegex , LENGTH_MSG , MATCH_MSG} from './Constants'

function checkAttrs(nick , firstName , lastName , pass , rePass , email , errorAttrs){
    checkNick(nick , errorAttrs);
    checkName(firstName , errorAttrs , 'errFirstName');
    checkName(lastName , errorAttrs , 'errLastName');
    checkPass(pass , errorAttrs , 'errPass');
    checkPass(rePass , errorAttrs , 'errRePass');
    checkMail(email , errorAttrs);
}

function checkNick(nickName , errorAttrs){
    if((nickRegex.test(nickName) == false) && (nickName.length < 5 || nickName.length > 15)){
        errorAttrs.errNick = 'INVALID_NICK';
        return;
    }else if(nickName.length < 5 || nickName.length > 15){
        errorAttrs.errNick = LENGTH_MSG;
        return;
    }else if(nickRegex.test(nickName) == false){
        errorAttrs.errNick = MATCH_MSG;
        return;
    }else{return;}
}

function checkName(name , errorAttrs , errPropType){
    if((nameRegex.test(name) == false) && (name.length < 2)){
        errorAttrs[errPropType] = 'INVALID_NAME';
        return;
    }else if(nameRegex.test(name) == false){
        errorAttrs[errPropType] = MATCH_MSG;
        return;
    }else if(name.length < 2 ){
        errorAttrs[errPropType] = LENGTH_MSG;
    }else{return;}
}

function checkPass(pass , errorAttrs , errPropType){
    if((passRegex.test(pass) == false) && pass.length < 8){
        errorAttrs[errPropType] = 'INVALID_PASS';
        return;
    }else if(passRegex.test(pass) == false){
        errorAttrs[errPropType] = MATCH_MSG;
        return;
    }else if(pass.length < 8){
        errorAttrs[errPropType] = LENGTH_MSG;
        return;
    }else{return;}
}

function checkMail(email , errorAttrs){
    if(mailRegex.test(email) == false){
        errorAttrs.errEmail  = 'INVALID_MAIL';
        return;
    }else{return;}
}

function createCustomError(){
    return {errNick : '#' , errFirstName : '#' , errLastName : '#' , errPass : '#' , errRePass : '#' , errEmail : '#'};
}

export function registerPerson(nick , firstName , lastName , pass , rePass , email , setInvalidRegister){
    const errorAttrs = createCustomError();
    checkAttrs(nick , firstName , lastName , pass , rePass , email , errorAttrs);
    setInvalidRegister(errorAttrs);
}