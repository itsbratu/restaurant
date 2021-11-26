import React from 'react'
import { useState } from 'react';

const MenuB = () => {

    const [creamyInfo , setCreamyInfo] = useState(false);

    function switchRenderCreamy(creamyInfo){
        switch(creamyInfo){
            case false:
                return(
                    <div className = "grid grid-in-vertical1 bg-creamy bg-cover bg-center animation ease-in-out duration-500 transform hover:scale-110 hover:z-10 cursor-pointer"
                         onClick = {() => {setCreamyInfo(!creamyInfo)}}>
                        <div className = "flex items-end py-2 px-5">
                            <h1 className = "text-3xl font-artistic select-none">Creamy pasta</h1>
                        </div>
                    </div>
                );
            default:
                return(
                    <div className = "grid grid-in-vertical1 bg-yellow-500 opacity-95 cursor-pointer"
                         onClick = {() => {setCreamyInfo(!creamyInfo)}}
                    >
                        <div className = "flex flex-col justify-evenly items-center">
                            <img src = "/images/penne.png " className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                            <img src = "/images/cream.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                            <img src = "/images/spinach.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                            <img src = "/images/parmesan.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                            <img src = "/images/olive-oil.png" className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
                            <button className = "text-3xl mt-10 font-general-font"><img src = "/images/order.png" className = "w-12"/></button>
                        </div>
                    </div>
                );
        }
    }

    return(
        <div className = "grid grid-areas-menuB-layout gap-5 w-3/4 h-screen -ml-5">
            {switchRenderCreamy(creamyInfo)}
            <div className = "grid grid-in-vertical2 bg-green-700 h-96">

            </div>
            <div className = "grid grid-in-vertical3 bg-green-800 h-44">

            </div>
        </div>
    )
}

export default MenuB;