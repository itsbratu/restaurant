import { set } from 'js-cookie';
import React from 'react'
import { useState } from 'react';

const MenuA = () => {

    const [carbonaraInfo , setCarbonaraInfo] = useState(false);
    const [lasagnaInfo , setLasagnaInfo] = useState(false);
    const [macInfo , setMacInfo] = useState(false);

    function switchRenderCarbonara(carbonaraInfo){
        switch(carbonaraInfo){
            case false:
                return(
                    <div className = "grid grid-in-section1 bg-bolognese bg-cover bg-center animation ease-in-out duration-500 transform hover:scale-110 hover:z-10 cursor-pointer" onClick = {()=>{setCarbonaraInfo(!carbonaraInfo)}}>
                        <div className = "grid grid-cols-2 gap-5">
                            <div className = "flex items-end">
                                <h1 className = "text-5xl font-artistic py-5 px-5 select-none">Bolognese</h1>
                            </div>
                        </div>
                    </div>
                );
            default:
                return(
                    <div className = "grid grid-in-section1 bg-black opacity-80 cursor-pointer" onClick = {()=>{setCarbonaraInfo(!carbonaraInfo)}}>
                        <div className = "grid grid-areas-menuA-bolognese gap-5">
                            <div className = "grid grid-in-symbol text-white">
                                <div className = "flex items-center justify-evenly select-none">
                                    <img src = "/images/spaghetti.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                                    <img src = "/images/tomato-sauce.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                                    <img src = "/images/tomato.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                                    <img src = "/images/minced-meat.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                                    <img src = "/images/parmesan.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                                    <img src = "/images/oregano.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                                </div>
                            </div>
                            <div className = "grid grid-in-info text-white">
                                <div className = "flex flex-col items-center">
                                    <button className = "text-3xl font-general-font"><img src="/images/order.png" className = "w-12"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    }

    function switchRenderLasagna(lasagnaInfo){
        switch(lasagnaInfo){
            case false:
                return(
                    <div className = "grid grid-rows-2 gap-10 grid-in-section2 bg-lasagna bg-center bg-cover bg-no-repeat animation ease-in-out duration-500 transform hover:scale-110 hover:z-10 cursor-pointer" onClick = {()=>{setLasagnaInfo(!lasagnaInfo)}}>
                        <div className = "flex justify-center pt-2 text-5xl font-artistic">Lasagna</div>
                    </div>
                )
            default:
                return(
                    <div className = "grid grid-in-section2 bg-black opacity-90 cursor-pointer" onClick = {()=>{setLasagnaInfo(!lasagnaInfo)}}>
                        <div className = "flex flex-col items-center justify-evenly my-10 text-white">
                            <img src = "/images/lasagna.png " className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                            <img src = "/images/minced-meat.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                            <img src = "/images/tomato-sauce.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                            <img src = "/images/parmesan.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                            <img src = "/images/mozzarella.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                            <img src = "/images/tomato.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                            <img src = "/images/onion.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                            <button className = "text-3xl mt-10 font-general-font"><img src = "/images/order.png" className = "w-12"/></button>
                        </div>
                    </div>
                )
        }
    }

    function switchRenderMac(macInfo){
        switch(macInfo){
            case false:
                return(
                    <div className = "grid grid-in-section3 bg-mac bg-cover bg-no-repeat bg-center animation ease-in-out duration-500 transform hover:scale-110 hover:z-10 cursor-pointer" onClick = {() => {setMacInfo(!macInfo)}}>
                        <div className = "flex flex-col justify-center text-5xl font-artistic pl-5 mt-1">
                            <h1>Mac</h1>
                        </div>
                    </div>
                );
            default:
                return(
                    <div className = "grid grid-in-section3 bg-black cursor-pointer" onClick = {()=>{setMacInfo(!macInfo)}}>
                        <div className = "grid grid-areas-menuA-bolognese gap-5">
                            <div className = "grid grid-in-symbol text-white">
                                <div className = "flex items-center justify-evenly select-none">
                                    <img src = "/images/macaroni.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                                    <img src = "/images/cinammon.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                                    <img src = "/images/milk.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                                    <img src = "/images/parmesan.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                                    <img src = "/images/cheddar.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                                    <img src = "/images/butter.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                                </div>
                            </div>
                            <div className = "grid grid-in-info text-white">
                                <div className = "flex flex-col items-center">
                                    <button className = "text-3xl font-general-font"><img src="/images/order.png" className = "w-12"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                );         

        }
    }

    return(
        <div className = "grid grid-areas-menuA-layout gap-5 h-screen w-5/6 ml-10">
            {switchRenderCarbonara(carbonaraInfo)}
            {switchRenderLasagna(lasagnaInfo)}
            {switchRenderMac(macInfo)}
        </div>
    )
}

export default MenuA;