import React from 'react'
import validateFields from '../src/Utils/Register/RegisterValidation';

class InvalidInput extends Error{
    constructor(errMsg){
        super(errMsg);
        this.name = InvalidInput;
    }
}

class UserValidator{

    constructor(user_input){
        this.user = user_input;
    }

    validate(){
        var errorMsgs = "";
        var errFields = {nick : '' , firstName : '' , lastName : '' , pass : '' , rePass : '' , email : ''};
        validateFields(this.user , errFields);

        const keys = Object.keys(errFields);
        keys.forEach((key , index) =>{
            if(errFields[key].length != 0){
                errorMsgs += errFields[key];
            }
        })

        if(errorMsgs.length > 0){
            throw new InvalidInput(errorMsgs);
        }
    }
}

export default InvalidInput
export default UserValidator;