import React from 'react'

const MenuItem = (props) =>{
    
    const doubleDecimals = (Math.round(props.price * 100) / 100).toFixed(2);

    return(
        <div className = "menu-item menu_item_css">
            <div className = {`menu-item-category ${props.color}`}/>
            <div className = "menu-item-image-container">
                <div className = {`menu-item-image menu_item_img_css`}>
                    <img className="h-full w-full" src={props.img}/>
                </div>
            </div>
            <div className = "menu_item_info_container_css">
                <div className = "menu-item-header-container">
                    <h1>{props.title}</h1>
                </div>
                <div className = "menu-item-subheader-container"> 
                    <h1>( {props.quantity}g )</h1>
                </div>
                <div class></div>
                <div className = "menu-item-ingredients-container">
                    {Object.entries(props.ingredients).map(([key , value])=>{
                        return(
                            <div className = "menu-item-ingredient">
                                <img className = "menu-item-ingredient-icon" src = {`${value}`}/>
                                <h1>{key}</h1>
                            </div>
                        );
                    })}
                </div>
                <div className = "menu-item-button">
                    <button><i class="fas fa-money-bill"></i> {`${doubleDecimals}`}</button>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;