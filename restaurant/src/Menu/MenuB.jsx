import React from 'react'
import { useState} from 'react';
import { getCookie } from 'cookies'
import menuItems from './Constants';
import Ingredient from './Ingredient';
import addToCart from './logic';

const MenuB = () => {

    const [creamyInfo , setCreamyInfo] = useState(false);
    const [carbonaraInfo , setCarbonaraInfo] = useState(false);
    const [seaPastaInfo , setSeaPastaInfo] = useState(false);

    function switchRenderCreamy(creamyInfo){
        switch(creamyInfo){
            case false:
                return(
                    <div className = "grid grid-in-section_creamy bg-creamy bg-cover bg-center animation ease-in-out duration-500 transform hover:scale-110 hover:z-10 cursor-pointer"
                    onClick = {() => {setCreamyInfo(!creamyInfo)}}>
                       <div className = "flex items-end px-5">
                           <h1 className = "text-5xl font-artistic select-none">Creamy pasta</h1>
                       </div>
                    </div>
                );
            default:
                return(
                    <div className = "grid grid-in-section_creamy bg-yellow-400 cursor-pointer" onClick = {() => {setCreamyInfo(!creamyInfo)}}>
                        <div className = "flex flex-col justify-evenly items-center">
                            {menuItems.creamy.ingredients.map((currIngredient) => {
                                return(<Ingredient name = {currIngredient} position = {"top"}/>);
                            })}
                            <button className = "text-3xl mt-10 font-general-font animation ease-in-out duration-1000 transform hover:scale-150"><img src = "/images/order.png" className = "w-12" onClick = {() => {addToCart(getCookie("email") , menuItems.creamy.id)}}/></button>
                        </div>
                    </div>
                );
        }
    }

    function switchRenderCarbonara(carbonaraInfo){
        switch(carbonaraInfo){
            case false:
                return(
                    <div className = "grid grid-in-section_carbonara bg-carbonara bg-cover bg-center animation ease-in-out duration-500 transform hover:scale-110 hover:z-10 cursor-pointer"
                    onClick = {() => {setCarbonaraInfo(!carbonaraInfo)}}>
                        <div className = "flex items-start py-2 px-5">
                            <h1 className = "text-5xl font-artistic select-none">Carbonara</h1>
                        </div>
                    </div>
                )
            default:
                return(
                    <div className = "grid grid-in-section_carbonara bg-yellow-400 opacity-90 cursor-pointer" 
                    onClick = {() => {setCarbonaraInfo(!carbonaraInfo)}}>
                        <div className = "flex flex-col items-center justify-evenly">
                            {menuItems.carbonara.ingredients.map((currIngredient) => {
                                return(<Ingredient name = {currIngredient} position = {"top"}/>);
                            })}
                            <button className = "text-3xl mt-10 font-general-font animation ease-in-out duration-1000 transform hover:scale-150"><img src = "/images/order.png" className = "w-12" onClick = {() => {addToCart(getCookie("email") , menuItems.carbonara.id)}}/></button>
                        </div>
                    </div>
            )   
        }
    }

    function switchRenderSeaPasta(seaPasta){
        switch(seaPasta){
            case false:
                return(
                    <div className = "grid grid-in-section_sea_pasta bg-seapasta bg-cover bg-center animation ease-in-out duration-500 transform hover:scale-110 hover:z-10 cursor-pointer"
                    onClick = {() => {setSeaPastaInfo(!seaPastaInfo)}}>
                        <div className = "flex items-end pl-5 pb-2">
                            <h1 className = "text-5xl font-artistic select-none">Shrimp and Octopus</h1>
                        </div>
                    </div>
                )
            default:
                return(
                    <div className = "grid grid-in-section_sea_pasta bg-yellow-400 opacity-80 cursor-pointer" 
                    onClick = {() => {setSeaPastaInfo(!seaPastaInfo)}}>
                        <div className = "flex flex-col items-center justify-evenly">
                            {menuItems.seaPasta.ingredients.map((currIngredient) => {
                                return(<Ingredient name = {currIngredient} position = {"top"}/>);
                            })}
                            <button className = "text-3xl mt-10 font-general-font animation ease-in-out duration-1000 transform hover:scale-150"><img src = "/images/order.png" className = "w-12" onClick = {() => {addToCart(getCookie("email") , menuItems.seaPasta.id)}}/></button>
                        </div>
                    </div>
                )
        }
    }

    return(
        <div className = "grid grid-areas-menuB-layout gap-5 h-screen mr-28">
            {switchRenderCreamy(creamyInfo)}
            {switchRenderCarbonara(carbonaraInfo)}
            {switchRenderSeaPasta(seaPastaInfo)}
        </div>
    )
}

export default MenuB;