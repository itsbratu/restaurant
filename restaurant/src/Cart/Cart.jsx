import React, { useEffect } from 'react'
import { useState } from 'react';
import { getCookie } from 'cookies';
import Axios from 'axios'
import usefulCartData from './logic';
import CartItem from './CartItem';
import InputAddress from './InputAddress';

import Geocode from "react-geocode";
import { GoogleMap , withScriptjs , withGoogleMap , Marker} from 'react-google-maps';
import darkTheme from 'Utils/mapStyling';

require('dotenv').config()

const WrappedMap = withScriptjs(withGoogleMap(Map));
const REACT_APP_MY_GOOGLE_MAPS_API = process.env.REACT_APP_MY_GOOGLE_MAPS_API;

// Geocode.setApiKey(``);
// Geocode.setLanguage("en");
// Geocode.setRegion("ro");
// Geocode.setLocationType("ROOFTOP");

function Map(){
    return(
        <GoogleMap defaultZoom = {12} 
        defaultCenter = {{lat : 46.770920 , lng : 23.589920}}>
            <Marker key = {1} position = {{lat : 46.753350 , lng : 23.576040}} icon = {{url : "/images/P.png" , scaledSize : new window.google.maps.Size(50 , 50)}}/>
            <Marker key = {2} position = {{lat : 46.783280 , lng : 23.631000}} icon = {{url : "/images/P.png" , scaledSize : new window.google.maps.Size(50 , 50)}}/>
            <Marker key = {3} position = {{lat : 46.750930 , lng : 23.596210}} icon = {{url : "/images/P.png" , scaledSize : new window.google.maps.Size(50 , 50)}}/>
            <Marker key = {4} position = {{lat : 46.770910 , lng : 23.593310}} icon = {{url : "/images/P.png" , scaledSize : new window.google.maps.Size(50 , 50)}}/>
            <Marker key = {5} position = {{lat : 46.767700 , lng : 23.624330}} icon = {{url : "/images/P.png" , scaledSize : new window.google.maps.Size(50 , 50)}}/>
        </GoogleMap>
    );
}

function validateInput(streetInput , numberInput , phoneInput , apInput){
    var invalidAddress = {invalidStreet : false , invalidNumber : false , invalidAp : false , invalidPhone : false};
    let phoneRegex = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");
    let numberRegex = new RegExp("^[1-9][0-9]?$|^1000$");
    let apRegex = new RegExp("^[1-9][0-9]?$|^100$");
    if(streetInput.length <= 0){
        invalidAddress.invalidStreet = true;
    }
    if(!numberRegex.test(numberInput)){
        invalidAddress.invalidNumber = true;
    }   
    if(!apRegex.test(apInput) && apInput.length > 0){
        invalidAddress.invalidAp = true;
    }
    if(!phoneRegex.test(phoneInput)){
        invalidAddress.invalidPhone = true;
    }
    return invalidAddress;
}

// function printCoords(address){
//     Geocode.fromAddress(address).then(
//         (response) => {
//           const { lat, lng } = response.results[0].geometry.location;
//           console.log(lat, lng);
//         },
//         (error) => {
//           console.error(error);
//         }
//       );
// }

const Cart = () =>{

    const [shoppingItems , setShoppingItems] = useState([]);
    const [reRender , setReRender] = useState(false);

    const [street , setStreet] = useState('');
    const [streetNumber , setStreetNumber] = useState('');
    const [phone , setPhone] = useState('');
    const [apartament , setApartment] = useState('');
    const [invalidAddress , setInvalidAddress] = useState({invalidStreet : false , invalidNumber : false , invalidAp : false , invalidPhone : false})

    useEffect(()=>{
        Axios.post("http://localhost:4000/myItems" , {
            user : getCookie('email') ,
        }).then(response =>{
            setShoppingItems(usefulCartData(response.data));
        }).catch(error =>{
            console.log(error);
        })
    })

    function calculateTotal(){
        var totalSum = 0;
        shoppingItems.map((currentItem) => {
            totalSum += currentItem.quantity * currentItem.price;
        })
        return totalSum;
    }

    console.log(invalidAddress.invalidStreet , invalidAddress.invalidNumber , invalidAddress.invalidAp , invalidAddress.invalidPhone);

    return(
        <div className = "grid gap-5 grid-areas-cart-layout h-auto mx-10 my-10">
            <div className = "grid grid-in-cart bg-gray-100 h-screen">
                <div className = "flex flex-col justify-start m-5">
                    {shoppingItems.map((currentItem) => {
                        return(
                            <CartItem id = {currentItem.id} name = {currentItem.name} price = {currentItem.price} quantity = {currentItem.quantity} onRenderChange = {setReRender}/>
                        );  
                    })}
                    <div className = "flex items-center justify-center h-1/6 w-full ">
                        <h1 className = "text-5xl font-general-font ">Total : {calculateTotal()} <i class="fas fa-dollar-sign"></i> </h1>
                    </div>
                </div>
            </div>
            <div className = "grid grid-in-map h-screen">
                <WrappedMap 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_MY_GOOGLE_MAPS_API}`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{height: `100%`, width: `100%`}} />}
                    mapElement={<div style={{height: `100%`, width: `100%`}} />} 
                />
                {/* <div className = "flex flex-col h-full w-1/2 items-center justify-evenly">
                    <h1>{printCoords("Cluj Napoca Strada Gheorghe Dima nr.6")}</h1>
                </div> */}
            </div>
            <div className = "grid grid-in-contact-user bg-gray-100 rounded-3xl h-full">
                <div className = "flex flex-col m-5 bg-gray-400 rounded-3xl items-center justify-evenly">
                    <InputAddress name = {"Street"} setProperty = {setStreet} invalidInput = {invalidAddress.invalidStreet}/>
                    <InputAddress name = {"Street number"} setProperty = {setStreetNumber} invalidInput = {invalidAddress.invalidNumber}/>
                    <InputAddress name = {"Apartment"} setProperty = {setApartment} invalidInput = {invalidAddress.invalidAp}/>
                    <InputAddress name = {"Phone number"} setProperty = {setPhone} invalidInput = {invalidAddress.invalidPhone}/>
                    <button className = "w-1/4 h-1/6 font-extrabold font-general-font text-4xl animation ease-in-out duration-300 transform hover:scale-125" onClick = {() => {setInvalidAddress(validateInput(street , streetNumber , phone , apartament))}}>Find me!</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;