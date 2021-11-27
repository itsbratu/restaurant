import React from 'react'

const Info = () => {

    return(
        <div id = "info" className = "grid grid-areas-info-layout h-96 w-11/12">
            <div className = "bg-info-section bg-cover bg-center rounded-3xl grid-in-img-section"/>
            <div className = "grid-in-text ml-5">
                <div className = "flex flex-col text-center justify-evenly mt-5 select-none">
                    <h2 className = "font-artistic text-4xl">QUALITY</h2>
                    <h2 className = "font-artistic text-4xl mt-10">QUANTITY</h2>
                    <h2 className = "font-artistic text-4xl mt-10">ELEGANCE</h2>
                    <div className = "font-artistic text-4xl mt-10">PASSION</div>
                </div>
            </div>
        </div>  
    );
}

export default Info;