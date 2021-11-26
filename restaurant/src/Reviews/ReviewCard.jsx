import React from 'react'

const ReviewCard = (props) => {

    const {id , info , name , picture , rating} = props.review;

    return(
        <div className = {`grid grid-in-review${props.id} -mt-20`}>
            <div className = "flex flex-col justify-evenly text-center">
                <div className = "flex justify-center w-full h-1/3">
                    <img src = {`${picture}`} className = "rounded-full"/>
                </div>
                <h1 className = "-mt-5 text-4xl font-artistic">{name}</h1>
                <h1 className = "text-md font-general-font">{info}</h1>
                <div className = "flex justify-center">
                    {Array.from(Array(rating).keys()).map((value) => {
                        return(
                            <>
                                <img className = "w-10" src = "/images/star.png"></img>
                            </>
                        )
                    })}
                </div>

            </div>
        </div>
    );
}

export default ReviewCard;