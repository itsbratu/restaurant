import React from 'react'
import Tippy from '@tippyjs/react';

const Ingredient = (props) => {
    return(
        <Tippy content = {`${props.name}`} placement = {`${props.position}`} duration = {0} className = "p-3 font-artistic text-tooltip bg-white rounded-full opacity-75">
            <img src = {`/images/${props.name}.png`} className = "animation ease-in-out duration-500 transform hover:scale-125 w-12"/>
        </Tippy>
    );
}

export default Ingredient;