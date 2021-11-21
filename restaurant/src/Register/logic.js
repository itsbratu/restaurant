import axios from "axios";
import { REGEX_HOLDER } from "./constants";

import Axios from 'axios';

function validateFields(currUser , currErr){
    for(const [field , regexList] of Object.entries(REGEX_HOLDER)){
        var errorList = '';
        regexList.forEach(regex => {
            for(var key in regex){
                let curr_key = key;
                let curr_value = regex[key];
                let re = new RegExp(curr_key)
                if(!re.test(currUser[field])){
                    errorList = errorList + curr_value + '\n';
                }
            }
        })
        if((field == 'pass' || field == 'rePass') && (currUser.pass !== currUser.rePass)){
            errorList += '-Passwords should match!\n';
        }
        currErr[field] = errorList;
    }
}

export function registerPerson(nick , firstName , lastName , pass , rePass , email , users , setInvalidRegister , setRedirect){
    const currUser = {nick : nick , firstName : firstName , lastName : lastName , pass : pass , rePass : rePass , email : email};
    var currErr = {nick : '' , firstName : '' , lastName : '' , pass : '' , rePass : '' , email : ''};
    validateFields(currUser , currErr);
    
    const keys = Object.keys(currErr);
    let valid_user = true;
    keys.forEach((key , index) =>{
        if(currErr[key].length != 0){
            valid_user = false;
            setInvalidRegister(currErr);
        }
    })

    users.forEach((user) => {
        if(user.email === currUser.email){
            valid_user = false;
            alert("User already registered!Redirecting to login form...")
            setRedirect(true);
        }
    })

    if(valid_user){
        alert("User registered succesfully!");    
        Axios.post("http://localhost:4000/register" , {
            user : currUser
        }).then(() => {
            console.log("Good job!");
        })
        setRedirect(true);
    }

}

export default validateFields;