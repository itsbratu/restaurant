import React from 'react'
import { GoogleMap , withScriptjs , withGoogleMap , Marker} from 'react-google-maps';
import darkTheme from './Footer.MapStyling';

require('dotenv').config()

function Map(){
    return(
        <GoogleMap defaultZoom = {13} 
        defaultCenter = {{lat : 46.770920 , lng : 23.589920}}
        options = {{styles : darkTheme}}>
            <Marker key = {1} position = {{lat : 46.753350 , lng : 23.576040}}/>
            <Marker key = {2} position = {{lat : 46.783280 , lng : 23.631000}}/>
            <Marker key = {3} position = {{lat : 46.750930 , lng : 23.596210}}/>
            <Marker key = {4} position = {{lat : 46.770910 , lng : 23.593310}}/>
            <Marker key = {5} position = {{lat : 46.767700 , lng : 23.624330}}/>
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
const REACT_APP_MY_GOOGLE_MAPS_API = process.env.REACT_APP_MY_GOOGLE_MAPS_API;

const Contact = () => {
    return (
        <div id = "contact" className = "grid grid-areas-contact-layout h-screen w-11/12">
            <div className = "grid grid-in-map bg-black">
            <WrappedMap 
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_MY_GOOGLE_MAPS_API}`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{height: `100%`, width: `100%`}} />}
                        mapElement={<div style={{height: `100%`, width: `100%`}} />} 
            />
            </div>
            <div className = "grid grid-in-info text-black mt-16 select-none">
                <div className = "grid grid-areas-footer-layout">
                    <div className = "grid grid-in-addresses h-full">
                        <div className = "flex flex-col items-center justify-center font-artistic text-2xl">
                            <h1 className = "mb-3">Gheorghe Dima nr.6</h1>
                            <h1 className = "mb-3">Cojocnei nr.10</h1>
                            <h1 className = "mb-3">Adrian Marino nr.20</h1>
                            <h1 className = "mb-3">Iuliu Maniu nr.68</h1>
                            <h1 className = "mb-3">Aleea Bizusa nr.5</h1>
                        </div>
                    </div>
                    <div className = "grid grid-in-logo-social h-full bg-white">
                        <div className = "flex flex-col text-black items-center justify-center font-artistic">
                            <h1 className = "text-footer-logo tracking-widest"><span className = "text-5xl">&copy;</span>Pasterino</h1>
                            <div className = "flex justify-evenly w-full mt-5">
                                <h1 className = "-mr-5 animation ease-in-out duration-300 transform hover:scale-150"><i class="fab fa-facebook-f fa-2x"></i></h1>
                                <h1 className = "-mr-5 animation ease-in-out duration-300 transform hover:scale-150"><i class="fab fa-instagram fa-2x"></i></h1>
                                <h1 className = "-mr-5 animation ease-in-out duration-300 transform hover:scale-150"><i class="fab fa-twitter fa-2x"></i></h1>
                            </div>
                        </div>
                    </div>
                    <div className = "grid grid-in-phone h-full">
                        <div className = "flex flex-col items-center justify-center text-3xl font-artistic">
                            <h1 className = "mb-10">(+40) 771 272 504</h1>
                            <h1>(+40) 772 175 241</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;