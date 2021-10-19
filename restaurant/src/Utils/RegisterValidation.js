const nickRegex = /^[^0-9!#$%^&*-_+="]\w+$/; //orice format care nu incepe cu cifra(simbol / litera)
const nameRegex = /^[a-zA-Z,.'-]+$/; //doar litere si caractere precum , . ' - (O'briend eg)
const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; //macar 8 caractere(1 special , 1 nr , 1 uppercase letter)
const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // 

export const LENGTH_MSG = 'INVALID_LENGTH';
export const MATCH_MSG = 'INVALID_MATCH'

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