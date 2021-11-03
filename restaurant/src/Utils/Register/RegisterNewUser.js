import React from 'react'
import Axios from "axios"

const add_user = (currUser) =>{
    Axios.post("http://localhost:4000/add" , {
        user : currUser
    }).then(() => {
        console.log("User adaugat!")
    })
}

export default add_user;
