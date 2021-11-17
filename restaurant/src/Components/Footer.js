import React from 'react'
import { GoogleMap , withScriptjs , withGoogleMap , Marker} from 'react-google-maps';
import Logo from '../Images/logo_noodles.png'
import darkTheme from 'Utils/Footer/MapStyling';

require('dotenv').config()

function Map(){
    return(
        <GoogleMap defaultZoom = {13} 
        defaultCenter = {{lat : 46.770920 , lng : 23.589920}}
        options = {{styles : darkTheme}}>
            <Marker key = {1} position = {{lat : 46.753350 , lng : 23.576040}}/>
            <Marker key = {2} position = {{lat : 46.783280 , lng : 23.631000}}/>
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
const REACT_APP_MY_GOOGLE_MAPS_API = process.env.REACT_APP_MY_GOOGLE_MAPS_API;

const Footer = () =>{

    return(
        <div id = "contact" className = "footer-main">
            <div className = "footer-grid">
                <div className = "footer-grid-item">
                    <h1 className = "footer-header header-about">About Us</h1>
                    <h1 className = "about-text select-none">Italian cuisine is a Mediterranean cuisine consisting of the ingredients, recipes and cooking techniques developed across the Italian Peninsula since antiquity, and later spread around the world together with waves of Italian diaspora.Our restaurant does it all with pride and succes!</h1>
                </div>
                <div className = "footer-grid-item">
                    <h1 className = "footer-header header-align">Navigation</h1>
                    <div class = "footer-navigation-links">
                        <a className = "footer-link footer-link-home select-none" href = "#home"><h1>HOME</h1></a>
                        <a className = "footer-link footer-link-info select-none" href = "#info"><h1>INFO</h1></a>
                        <a className = "footer-link footer-link-menu select-none" href = "#menu"><h1>MENU</h1></a>
                        <a className = "footer-link footer-link-reviews select-none"><h1>REVIEWS</h1></a>
                    </div>
                </div>
                <div className = "footer-grid-item">
                    <h1 className = "footer-header">Find us</h1>
                    <WrappedMap 
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_MY_GOOGLE_MAPS_API}`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{height: `500px`, width: `600px`}} />}
                        mapElement={<div style={{height: `600px`, width: `600px`}} />} 
                    />
                </div>
            </div>
            <div className = "footer-social">
                <div class = "footer-social-copyright select-none">
                    <img src = {Logo} alt = "footer-logo" className = "footer-social-logo"/>
                    <p className = "footer-copyright-text">&copy; <span className = "footer-copyright-logo-text">Pasterino</span> - all rights reserved</p>
                </div>
                <div className = "footer-social-pages select-none">
                    <h1><i class="fab fa-facebook"></i> FACEBOOK</h1>
                    <h1><i class="fab fa-twitter-square"></i> TWITTER</h1>
                    <h1><i class="fab fa-instagram"></i> INSTAGRAM</h1>
                    <h1><i class="fab fa-wordpress"></i> WORDPRESS</h1>
                </div>
            </div>
        </div>
    );
}

export default Footer;