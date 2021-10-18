import React from 'react'
import Logo from '../Images/logo_noodles.png'
import { useHistory } from 'react-router';

const ROUTES_WITHOUT_HOMEPAGE = {
    '/login' : false,
    '/register' : false
}

const Home = (props)=>{

    let history = useHistory();
    const currentLocation = props.location.pathname;

    if(ROUTES_WITHOUT_HOMEPAGE[currentLocation]) return null;

    return( 
        <div className = 'home-section'>
            <nav className = 'nav-section'>
                <div className = 'nav-logo'>
                    <img src={Logo} alt = 'noodles' className = 'nav-logo-image'/>
                    <div className = 'nav-logo-text'>
                        <h4>pasterino</h4>
                    </div>
                </div>
                <ul className = 'nav-links'>
                    <li id = 'info_li'><a href='#' id = 'info_a'>Info</a></li>
                    <li id = 'menu_li'><a href='#' id = 'menu_a'>Menu</a></li>
                    <li id = 'reviews_li'><a href='#' id = 'reviews_a'>Reviews</a></li>
                    <li id = 'contact_li'><a href='#' id = 'contact_a'>Contact</a></li>
                </ul>
                <ul className = 'nav-register'>
                    <li><a onClick={()=>{
                        history.push('./login')
                    }}>Login</a></li>
                    <li><a onClick={()=>{
                        history.push('./register')
                    }}>Register</a></li>
                </ul>
            </nav>
            <div className = 'nav-welcome'>
                &#126;pasterino&#126;
            </div>
        </div>
    );
}

export default Home;