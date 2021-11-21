import React from 'react'

const Category = (props) =>{

    const categoryName = props.name;
    const showCategory = props.value;
    const setShowCategory = props.setter;
    const stylingSelected = "menu-category-" + categoryName + "-selected";
    const stylingUnselected = "menu-category-" + categoryName + "-unselected";

    return(
        <button className = "menu-category-button" onClick = {()=>{setShowCategory(!showCategory)}}>
            {!showCategory && <h1 className = {`menu-category-text ${stylingUnselected}`}>{categoryName.charAt(0).toUpperCase()+categoryName.slice(1)}</h1>}
            {showCategory && <h1 className = {`menu-category-text ${stylingSelected}`}>{categoryName.charAt(0).toUpperCase()+categoryName.slice(1)}</h1>}
        </button>
    );
}

export default Category;