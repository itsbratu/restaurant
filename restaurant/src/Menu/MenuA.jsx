import React from 'react'
import addToCart from './logic';
import { useState } from 'react';
import { getCookie } from 'cookies'
import menuItems from './Constants';
import Ingredient from './Ingredient';
import Tippy from '@tippyjs/react';
const MenuA = () => {

    const [bologneseInfo , setBologneseInfo] = useState(false);
    const [lasagnaInfo , setLasagnaInfo] = useState(false);
    const [macInfo , setMacInfo] = useState(false);


    function switchRenderBolognese(bologneseInfo){
        switch(bologneseInfo){
            case false:
                return(
                    <div className = "grid grid-in-section_bolognese bg-bolognese bg-cover bg-center animation ease-in-out duration-500 transform hover:scale-110 hover:z-10 cursor-pointer"
                    onClick = {() => {setBologneseInfo(!bologneseInfo)}}>
                        <div className = "flex items-end">
                            <h1 className = "text-5xl font-artistic py-5 px-5 select-none">Bolognese</h1>
                        </div>
                    </div>
                );
            default:
                return(
                    <Tippy 
                        content = 
                        {<div className = "flex justify-items-start items-center">
                            <h1 className = "text-2xl text-green-500 font-artistic"> <i class="fas fa-dollar-sign">{menuItems.bolognese.price}</i></h1>
                        </div>} 
                        placement = "top-start" 
                        className = "bg-black rounded-full p-5" 
                        duration = {0}>
                        <div className = "grid grid-in-section_bolognese bg-black opacity-75 cursor-pointer" onClick = {()=>{setBologneseInfo(!bologneseInfo)}}>
                            <div className = "grid grid-areas-menuA-horizontal-layout gap-5">
                                <div className = "grid grid-in-symbol text-white">
                                    <div className = "flex items-center justify-evenly select-none">
                                        {menuItems.bolognese.ingredients.map((currIngredient) => {
                                            return(<Ingredient name = {currIngredient} position = {"top"}/>);
                                        })}
                                    </div>
                                </div>
                                <div className = "grid grid-in-info text-white">
                                    <div className = "flex flex-col items-center">
                                        <button className = "text-3xl font-general-font animation ease-in-out duration-1000 transform hover:scale-150"><img src="/images/order.png" className = "w-12" onClick = {() => {addToCart(getCookie("email") , menuItems.bolognese.id)}}/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tippy>
                );
        }
    }

    function switchRenderLasagna(lasagnaInfo){
        switch(lasagnaInfo){
            case false:
                return(
                    <div className = "grid grid-rows-2 gap-10 grid-in-section_lasagna bg-lasagna bg-center bg-cover bg-no-repeat animation ease-in-out duration-500 transform hover:scale-110 hover:z-10 cursor-pointer" onClick = {()=>{setLasagnaInfo(!lasagnaInfo)}}>
                        <div className = "flex justify-center pt-2 text-5xl font-artistic select-none">Lasagna</div>
                    </div>
                )
            default:
                return(
                    <Tippy 
                        content = 
                        {<div className = "flex justify-items-start items-center">
                            <h1 className = "text-2xl text-green-500 font-artistic"> <i class="fas fa-dollar-sign">{menuItems.lasagna.price}</i></h1>
                        </div>} 
                        placement = "top-start" 
                        className = "bg-black rounded-full p-5" 
                        duration = {0}>
                        <div className = "grid grid-in-section_lasagna bg-black opacity-80 cursor-pointer" onClick = {()=>{setLasagnaInfo(!lasagnaInfo)}}>
                            <div className = "flex flex-col items-center justify-evenly my-10 text-white">
                                {menuItems.lasagna.ingredients.map((currIngredient) => {
                                    return(<Ingredient name = {currIngredient} position = {"top"}/>);
                                })}
                            <button className = "text-3xl mt-10 font-general-font animation ease-in-out duration-1000 transform hover:scale-150"><img src = "/images/order.png" className = "w-12" onClick = {() => {addToCart(getCookie("email") , menuItems.lasagna.id)}}/></button>
                            </div>
                        </div>
                    </Tippy>
                );
        }
    }

    function switchRenderMac(macInfo){
        switch(macInfo){
            case false:
                return(
                    <div className = "grid grid-in-section_mac bg-mac bg-cover bg-no-repeat bg-center animation ease-in-out duration-500 transform hover:scale-110 hover:z-10 cursor-pointer" onClick = {() => {setMacInfo(!macInfo)}}>
                        <div className = "flex flex-col justify-start text-5xl font-artistic pl-5 mt-1 select-none">
                            <h1>Mac</h1>
                        </div>
                    </div>
                );
            default:
                return(
                    <Tippy 
                        content = 
                        {<div className = "flex justify-items-start items-center">
                            <h1 className = "text-2xl text-green-500 font-artistic"> <i class="fas fa-dollar-sign">{menuItems.mac.price}</i></h1>
                        </div>} 
                        placement = "bottom-start" 
                        className = "bg-black rounded-full p-5" 
                        duration = {0}>
                        <div className = "grid grid-in-section_mac bg-black opacity-90 cursor-pointer" onClick = {()=>{setMacInfo(!macInfo)}}>
                            <div className = "grid grid-areas-menuA-horizontal-layout gap-5">
                                <div className = "grid grid-in-symbol text-white">
                                    <div className = "flex items-center justify-evenly select-none">
                                        {menuItems.mac.ingredients.map((currIngredient) => {
                                            return(<Ingredient name = {currIngredient} position = {"top"}/>);
                                        })}
                                    </div>
                                </div>
                                <div className = "grid grid-in-info text-white">
                                    <div className = "flex flex-col items-center">
                                        <button className = "text-3xl font-general-font animation ease-in-out duration-1000 transform hover:scale-150"><img src="/images/order.png" className = "w-12" onClick = {() => {addToCart(getCookie("email") , menuItems.mac.id)}}/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tippy>
                );         

        }
    }

    return(

        <div id = "menu" className = "grid grid-areas-menuA-layout gap-5 h-screen w-5/6 ml-10">
            {switchRenderBolognese(bologneseInfo)}
            {switchRenderLasagna(lasagnaInfo)}
            {switchRenderMac(macInfo)}
        </div>
    )
}

export default MenuA;