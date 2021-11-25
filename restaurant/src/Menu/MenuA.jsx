import React from 'react'
import { useState } from 'react';

const MenuA = () => {

    const [carbonaraInfo , setCarbonaraInfo] = useState(false);

    function switchRenderCarbonara(carbonaraInfo){
        switch(carbonaraInfo){
            case false:
                return(
                    <div className = "grid grid-in-section1 bg-carbonara bg-cover bg-center animation ease-in-out duration-500 transform hover:scale-110">
                        <div className = "grid grid-cols-2 gap-5">
                            <div className = "flex items-end">
                                <h1 className = "text-5xl font-artistic py-5 px-5 select-none">Carbonara</h1>
                            </div>
                            <div className = "flex flex-col justify-evenly items-end mx-20">
                                <button className = "text-3xl font-general-font animation ease-in-out duration-500 transform hover:scale-125" onClick = {()=>{setCarbonaraInfo(!carbonaraInfo)}}><i class="fas fa-info-circle fa-2x"></i></button>
                                <button className = "text-3xl font-general-font animation ease-in-out duration-500 transform hover:scale-125"><i class="fas fa-plus-circle fa-2x"></i></button>
                            </div>
                        </div>
                    </div>
                );
            default:
                return(
                    <div className = "grid grid-in-section1 bg-black opacity-75">
                        <div className = "grid grid-areas-menuA-carbonara gap-5">
                            <div className = "grid grid-in-symbol text-white">
                                <div className = "flex items-center justify-evenly">
                                    <img src = "/images/spaghetti.png" className = "w-12"/>
                                    <img src = "/images/tomato-sauce.png" className = "w-12"/>
                                    <img src = "/images/tomato.png" className = "w-12"/>
                                    <img src = "/images/minced-meat.png" className = "w-12"/>
                                    <img src = "/images/parmesan.png" className = "w-12"/>
                                    <img src = "/images/oregano.png" className = "w-12"/>
                                </div>
                            </div>
                            <div className = "grid grid-in-info text-white">
                                <div className = "flex flex-col items-center">
                                <button className = "text-3xl font-general-font animation ease-in-out duration-500 transform hover:scale-125" onClick = {()=>{setCarbonaraInfo(!carbonaraInfo)}}><i class="fas fa-info-circle fa-2x"></i></button>
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
            <div className = "grid grid-in-section2 bg-red-500">

            </div>
            <div className = "grid grid-in-section3 bg-red-900">

            </div>
        </div>
    )
}

export default MenuA;