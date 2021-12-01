import React from 'react'
import { GoogleMap , withScriptjs , withGoogleMap , Marker} from 'react-google-maps';

const DefaultMap = () =>{
    return(
        <GoogleMap defaultZoom = {12} 
        defaultCenter = {{lat : 46.770920 , lng : 23.589920}}>
            <Marker key = {1} position = {{lat : 46.753350 , lng : 23.576040}} icon = {{url : "/images/P.png" , scaledSize : new window.google.maps.Size(50 , 50)}}/>
            <Marker key = {2} position = {{lat : 46.783280 , lng : 23.631000}} icon = {{url : "/images/P.png" , scaledSize : new window.google.maps.Size(50 , 50)}}/>
            <Marker key = {3} position = {{lat : 46.750930 , lng : 23.596210}} icon = {{url : "/images/P.png" , scaledSize : new window.google.maps.Size(50 , 50)}}/>
            <Marker key = {4} position = {{lat : 46.770910 , lng : 23.593310}} icon = {{url : "/images/P.png" , scaledSize : new window.google.maps.Size(50 , 50)}}/>
            <Marker key = {5} position = {{lat : 46.767700 , lng : 23.624330}} icon = {{url : "/images/P.png" , scaledSize : new window.google.maps.Size(50 , 50)}}/>
        </GoogleMap>
    )
}

export default DefaultMap;