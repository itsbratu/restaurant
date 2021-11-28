import React, { useEffect } from 'react'
import { useState } from 'react';
import { getCookie } from 'cookies';
import Axios from 'axios'
import menuItems from 'Menu/Constants';

const Cart = () =>{

    const [shoppingItems , setShoppingItems] = useState([]);

    useEffect(()=>{
        Axios.post("http://localhost:4000/myItems" , {
            user : getCookie('email') ,
        }).then(response =>{
            setShoppingItems(response.data);
        }).catch(error =>{
            console.log(error);
        })
    } , [])

    console.log(shoppingItems);

    return(
        <div className = "h-screen w-screen bg-gray-400">
            <div className = "grid grid-cols-3">
                <div></div>
            </div>
        </div>
    );
}

export default Cart;