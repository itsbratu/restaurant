import React from 'react'

const NavigationLinks = () =>{
    return(
        <ul className = "nav-links">
            <li id = 'info_li'><a href='#' id = 'info_a'>Info</a></li>
            <li id = 'menu_li'><a href='#' id = 'menu_a'>Menu</a></li>
            <li id = 'reviews_li'><a href='#' id = 'reviews_a'>Reviews</a></li>
            <li id = 'contact_li'><a href='#' id = 'contact_a'>Contact</a></li>
        </ul>
    );
}

export default NavigationLinks;