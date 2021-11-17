import React from 'react'
import { useState } from 'react';
import Category from './MenuSubComp/Category';

const Menu = () =>{

    const [lasagna , setLasagna] = useState(false);
    const [spaghetti , setSpaghetti] = useState(false);
    const [farfalle , setFarfalle] = useState(false);
    const [macaroni , setMacaroni] = useState(false);

    const currentCategories = ['lasagna' , 'spaghetti' , 'farfalle' , 'macaroni'];
    console.log(lasagna , spaghetti , farfalle , macaroni);

    return(
        <div id = "menu" className = "menu bg-yellow-600">
            <div className = "menu-header-section">
                <h1 className = "menu-header">Menu</h1>
            </div>
            <div className = "menu-categories-section">
                {currentCategories.map((category)=>{
                    const setterCategory = 'set' + category.charAt(0).toUpperCase()+category.slice(1);
                    return(
                        <Category name = {category} value = {eval(category)} setter = {eval(setterCategory)}/>
                    );
                })}
            </div>
            <div className = "menu-items-container">
                <div className = "menu-item">
                    <h1 className = "menu-item-header">LetsGo!</h1>
                    <p>Bla bla bla bla</p>
                </div>
            </div>
        </div>
    )
}

export default Menu;