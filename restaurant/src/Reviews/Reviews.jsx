import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from "axios"
import ReviewCard from './ReviewCard';

const Reviews = () => {

    const [reviews , setReviews] = useState([]);
    const [counter , setCounter] = useState(1);
 
    useEffect(()=>{
        Axios.get("http://localhost:4000/all_reviews")
        .then(response =>{
            setReviews(response.data);
        })
        .catch(error =>{
            console.log(error);
        })
    } , [])

    function getReviewsID(startPos){
        switch(startPos){
            case(reviews.length-1):
                return [reviews.length-1 , reviews.length , 1];
            case(reviews.length):
                return [reviews.length , 1 , 2];
            default:
                return [startPos , startPos + 1 , startPos + 2];
        }
    }

    function wrapperGetReview(cardNumber){
        var reviewsIndex = getReviewsID(counter);
        return reviews[reviewsIndex[cardNumber]-1];
    }
    
    console.log(wrapperGetReview(0));
    console.log(wrapperGetReview(1));
    console.log(wrapperGetReview(2));

    return (
        <div className = "grid grid-areas-reviews-layout gap-5 h-96 w-11/12 -mt-5">
            <ReviewCard id = {0} review = {wrapperGetReview(0)}/>
            <ReviewCard id = {1} review = {wrapperGetReview(1)}/>
            <ReviewCard id = {2} review = {wrapperGetReview(2)}/>
            <div className = "grid-in-buttons">
                <div className = "flex justify-around items-center h-full">
                    <button className = "bg-white w-14" onClick = {() => {setCounter(counter % reviews.length + 1)}}>+</button>
                    <button className = "bg-white w-14" onClick = {() => {counter!=1 ? setCounter(counter % reviews.length - 1) : setCounter(reviews.length)}}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Reviews;