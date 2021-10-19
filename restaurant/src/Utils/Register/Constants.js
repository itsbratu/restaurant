export const nickRegex = /^[a-zA-Z0-9_.-]*$/; //orice format care nu incepe cu cifra(simbol / litera)
export const nameRegex = /^[a-zA-Z,.'-]+$/; //doar litere si caractere precum , . ' - (O'briend eg)
export const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; //macar 8 caractere(1 special , 1 nr , 1 uppercase letter)
export const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // 

export const LENGTH_MSG = 'INVALID_LENGTH';
export const MATCH_MSG = 'INVALID_MATCH';