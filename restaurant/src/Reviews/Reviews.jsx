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

    function wrapperGetReviews(){
        var displayReviews = [];
        var reviewsIndex = getReviewsID(counter);
        //where 3 is the number of card reviews component
        for(let index = 0 ; index < 3 ; ++index){
            displayReviews.push(reviews[reviewsIndex[index]-1]);
        }
        return displayReviews;
    }

    console.log(reviews.length);
    console.log(counter);

    return (
        <div className = "grid grid-areas-reviews-layout gap-5 h-screen w-11/12 -mt-5">
            {wrapperGetReviews().map((review , index) => {
                return(
                    <>
                        {typeof(review)!=="undefined" && <ReviewCard id = {index} review = {review}/>}
                    </>
                );
            })}
            <div className = "grid-in-buttons">
                <div className = "flex justify-around items-center h-full -mt-5">
                    <button className = "w-14" onClick = {() => {counter!=1 ? setCounter(counter % reviews.length - 1) : setCounter(reviews.length)}}><i class="fas fa-arrow-circle-left fa-3x"></i></button>
                    <button className = "w-14" onClick = {() => {setCounter((counter % reviews.length) + 1)}}><i class="fas fa-arrow-circle-right fa-3x"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Reviews;