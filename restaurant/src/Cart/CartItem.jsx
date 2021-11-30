import React, { useCallback } from 'react'
import { getCookie } from 'cookies';
import addToCart from 'Menu/logic';
import { deleteFromCart } from 'Menu/logic';

const CartItem = (props) =>{

    const handleDataChange = useCallback(_ => {
        props.onRenderChange(true);
    } , [props.onRenderChange])

    function updateUserCart(updateType , idItem , deleteQuantity){
        switch(updateType){
            case addToCart:
                addToCart(getCookie("email") , idItem);
                handleDataChange();
                break;
            case deleteFromCart:
                deleteFromCart(getCookie("email") , idItem , deleteQuantity);
                handleDataChange();
        }
    }

    return(
        <div className = "flex justify-start h-1/6 w-full mt-2 select-none">
            <div className = "flex justify-center items-center h-full w-1/3 ml-5">
                <h1 className = "text-4xl font-general-font">{props.quantity} X <span className = "capitalize">{props.name}</span></h1>
            </div>
            <div className = "flex justify-center items-center h-full w-1/3 ml-5 ">
                <h1 className = "text-5xl font-general-font">{(Math.round(props.quantity * props.price * 100) / 100).toFixed(2)} <i class="fas fa-dollar-sign"></i></h1>
            </div>
            <div className = "flex justify-evenly h-full w-1/3 items-center  ml-5">
                <button className = "h-1/2 w-1/4 animation ease-in-out duration-300 transform hover:scale-125" onClick = {() => {updateUserCart(addToCart , props.id , 1)}}><i class="fas fa-plus-square fa-3x"></i></button>
                <button className = "h-1/2 w-1/4 animation ease-in-out duration-300 transform hover:scale-125" onClick = {() => {updateUserCart(deleteFromCart , props.id , 1)}} ><i class="fas fa-minus-square fa-3x"></i></button>
                <button className = "h-1/2 w-1/4 animation ease-in-out duration-300 transform hover:scale-125" onClick = {() => {updateUserCart(deleteFromCart , props.id , props.quantity)}}><i class="fas fa-times-circle fa-3x"></i></button>
            </div>
        </div>
    )
}

export default CartItem;