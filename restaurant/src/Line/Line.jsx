import React from 'react'

const Line = (props) =>{
    return(
        <div id = {`${props.id}`} className = "flex items-center justify-center w-11/12 h-44 my-10 bg-gray">
            <div className = "border-2 border-solid border-black w-1/2"></div>
        </div>
    )
}

export default Line;