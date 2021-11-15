import React from 'react'

const HomeCard = (props) => {
    return(
    <div className = {`${props.cardType}`}>
            <div className = 'register-card-icon'>
                <i class={`${props.icon} fa-7x fill-current ${props.textColor}`}></i>
            </div>
            <div className = 'register-card-text'>
                <p class = {`${props.textColor} font-extrabold font-general-font text-6xl`}>{props.text}</p>
            </div>
    </div>
    );
}

export default HomeCard;