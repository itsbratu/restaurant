import React, { useEffect } from 'react'
import { useState } from 'react';
import { getCookie } from 'cookies';
import Axios from 'axios'
import usefulCartData from './logic';
import CartItem from './CartItem';

const Cart = () =>{

    const [shoppingItems , setShoppingItems] = useState([]);
    const [reRender , setReRender] = useState(false);

    useEffect(()=>{
        Axios.post("http://localhost:4000/myItems" , {
            user : getCookie('email') ,
        }).then(response =>{
            setShoppingItems(usefulCartData(response.data));
        }).catch(error =>{
            console.log(error);
        })
    })

    function calculateTotal(){
        var totalSum = 0;
        shoppingItems.map((currentItem) => {
            totalSum += currentItem.quantity * currentItem.price;
        })
        return totalSum;
    }

    return(
        <div className = "grid gap-5 grid-areas-cart-layout h-auto mx-10 my-10">
            <div className = "grid grid-in-cart bg-gray-100 h-screen">
                <div className = "flex flex-col justify-start m-5">
                    {shoppingItems.map((currentItem) => {
                        return(
                            <CartItem id = {currentItem.id} name = {currentItem.name} price = {currentItem.price} quantity = {currentItem.quantity} onRenderChange = {setReRender}/>
                        );  
                    })}
                    <div className = "flex items-center justify-center h-1/6 w-full ">
                        <h1 className = "text-5xl font-general-font ">Total : {calculateTotal()} <i class="fas fa-dollar-sign"></i> </h1>
                    </div>
                </div>
            </div>
            <div className = "grid grid-in-map bg-black h-96">

            </div>
            <div className = "grid grid-in-user bg-black h-60">

            </div>
        </div>
    );
}

export default Cart;