import React from 'react'

const ReviewCard = (props) => {

    const {id , picture , name , info , rating} = props.review;
    console.log(id , picture , name , info , rating);

    return(
        <div className = {`grid grid-in-review${props.id} bg-yellow-600`}>
            <div className = "flex flex-col text-center justify-evenly">
                <h1>{picture}</h1>
                <h1>{name}</h1>
                <h1>{info}</h1>
                <h1>{rating}</h1>
            </div>
        </div>
    );
}

export default ReviewCard;