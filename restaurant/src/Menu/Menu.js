import React from 'react'
import { useState } from 'react';
import Category from '../MenuSubComp/Category';
import MenuItem from '../MenuSubComp/MenuItem';
import dictMenuItems from './constants';

const Menu = () =>{

    const [lasagna , setLasagna] = useState(true);
    const [spaghetti , setSpaghetti] = useState(true);
    const [farfalle , setFarfalle] = useState(true);
    const [macaroni , setMacaroni] = useState(true);

    const currentCategories = ['lasagna' , 'spaghetti' , 'farfalle' , 'macaroni'];

    function menuHeight(){
        let numberCategories = 0;
        currentCategories.forEach((category)=>{
            if(eval(category)){numberCategories++}
        })
        if(!numberCategories)return '500px';
        else{return (500 + numberCategories*1200).toString()+'px'};
    }

    console.log(menuHeight());

    return(
        <div id = "menu" className = "bg-yellow-600" style = {{height : menuHeight()}}>
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
                {dictMenuItems.map((item)=>{
                    if(eval(item['category'])){
                        return(
                            <MenuItem category = {item['category']} 
                                title = {item['title']}
                                color = {item['color']}
                                image = {item['img']}
                                ingredients = {item['ingredients']}
                                quantity = {item['quantity']}
                                price = {item['price']}
                            />
                        );
                    }
                })}
            </div>
        </div>
    )
}

export default Menu;