import { MATCH_MSG,LENGTH_MSG } from './Constants';

const stringSplit = (errString)=>{
    return errString.split('\n').map(str => <h2 className = 'register-invalid-input'>{str}</h2>);
}

export function renderNickErr(invalidRegister){
    let nickErrString = '';
        switch(invalidRegister.errNick){
            case 'INVALID_NICK':
                nickErrString = 'Invalid nickname\n-must contain at least 5 characters\n-must not contain a symbol(!@#$%^&*-_+=)';
                break;
            case LENGTH_MSG:
                nickErrString = 'Invalid nickname\n-must contain at least 5 characters';
                break;
            case MATCH_MSG:
                nickErrString = 'Invalid nickname\n-must not contain a symbol(!@#$%^&*-_+=)';
                break;
            default:
        }
        return stringSplit(nickErrString);
}