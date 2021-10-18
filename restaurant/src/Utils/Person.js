import React from 'react'

export class Person{

    constructor(nick  , firstName , lastName , pass  , email){
        this.nick = nick;
        this.firstName = firstName;
        this.lastName = lastName;
        this.pass = pass;
        this.email = email;
    }

    get getNick(){
        return this.nick;
    }

    get getFirstName(){
        return this.firstName;
    }

    get getLastName(){
        return this.lastName;
    }

    get getPass(){
        return this.pass;
    }

    get getEmail(){
        return this.email;
    }

    attrs(){
        return this.nick + ' ' + this.firstName + ' ' + this.lastName + ' ' + this.pass + ' ' + this.email;
    }

}