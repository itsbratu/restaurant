import React from 'react'

const NavigationLinks = () =>{
    return(
        <ul className = "nav-links">
            <li id = 'info_li'><a href='#info' id = 'info_a' class = "select-none">Info</a></li>
            <li id = 'menu_li'><a href='#menu' id = 'menu_a' class = "select-none">Menu</a></li>
            <li id = 'reviews_li'><a href='#reviews' id = 'reviews_a' class = "select-none">Reviews</a></li>
            <li id = 'social_li'><a href='#contact' id = 'contact_a' class = "select-none">Contact</a></li>
        </ul>
    );
}

export default NavigationLinks;