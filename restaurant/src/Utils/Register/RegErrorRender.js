import { MATCH_MSG,LENGTH_MSG, NICK_MSG, NAME_MSG, PASS_MSG, CONFIRM_MSG, MAIL_MSG } from './Constants';

const stringSplit = (errString)=>{
    return errString.split('\n').map(str => <h2 className = 'register-invalid-input'>{str}</h2>);
}

export function renderNickErr(invalidRegister){
    let nickErrString = '';
    switch(invalidRegister.errNick){
        case NICK_MSG:
            nickErrString = 'Invalid nickname!\n-must contain at least 5 characters\n-must not contain a symbol(!@#$%^&*-_+=)';
            break;
        case LENGTH_MSG:
            nickErrString = 'Invalid nickname!\n-must contain at least 5 characters';
            break;
        case MATCH_MSG:
            nickErrString = 'Invalid nickname!\n-must not contain a symbol(!@#$%^&*-_+=)';
            break;
        default:
    }
    return stringSplit(nickErrString);
}

export function renderNameErr(invalidRegister , nameType){
    let nameErrString = '';
    switch(invalidRegister[nameType]){
        case NAME_MSG:
            nameErrString = "Invalid name!\n-must contain at least 2 characters\n-can contain only letters and .'-";
            break;
        case LENGTH_MSG:
            nameErrString = "Invalid name!\n-must contain at least 2 characters";
            break;
        case MATCH_MSG:
            nameErrString = "Invalid name!\n-can contain only letters and .'-";
            break;
        default:
    }
    return stringSplit(nameErrString);
}

export function renderPassErr(invalidRegister , passType){
    let passErrString = '';
    switch(invalidRegister[passType]){
        case PASS_MSG:
            passErrString = "Invalid password!\n-must contain at least 8 characters\n-must contain one uppercase letter , one special character(@$!%*#?&) and one digit(0-9)\n-passwords must match";
            break;
        case LENGTH_MSG:
            passErrString = "Invalid password!\n-must contain at least 8 characters";
            break;
        case MATCH_MSG:
            passErrString = "Invalid password!\n-must contain one uppercase letter , one special character(@$!%*#?&) and one digit(0-9)"
            break;
        case CONFIRM_MSG:
            passErrString = "Passwords must match!"
            break;
        default:
    }
    return stringSplit(passErrString);
}

export function renderMailErr(invalidRegister){
    let mailErrString = '';
    if(invalidRegister.errEmail == MAIL_MSG){
        mailErrString = "Invalid mail address!";
    }
    return stringSplit(mailErrString);
}