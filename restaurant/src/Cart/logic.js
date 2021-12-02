import menuItems from "Menu/Constants";
import markers from "Utils/Maps/markers";

function dataCartFormat(userData){
    var convertedData = [];
    userData.forEach((userItem) => {
        for(let key in menuItems){
            if(menuItems[key].id === userItem.idItem){
                convertedData.push({
                    id : menuItems[key].id,
                    name : key ,
                    price : menuItems[key].price,
                    quantity : userItem.quantity
                })
                break;
            }
        }
    })
    return convertedData;
}

export function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d.toFixed(2);
  }
  
function deg2rad(deg) {
    return deg * (Math.PI/180)
}

export function coordsLine(homeLat , homeLng){
    var minimumDistance = getDistanceFromLatLonInKm(homeLat , homeLng , markers[0].position.lat , markers[0].position.lng);
    var destinationCoords = {lat : markers[0].position.lat , lng : markers[0].position.lng};

    markers.map((currentMarker) => {
        const currentDistance = getDistanceFromLatLonInKm(homeLat , homeLng , currentMarker.position.lat , currentMarker.position.lng);
        if(currentDistance < minimumDistance){
            minimumDistance = currentDistance;
            destinationCoords.lat = currentMarker.position.lat;
            destinationCoords.lng = currentMarker.position.lng;
        }
    });

    return [{lat : homeLat , lng : homeLng} , {lat : destinationCoords.lat , lng : destinationCoords.lng}];
}

export default dataCartFormat;