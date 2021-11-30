import menuItems from "Menu/Constants";

function usefulCartData(userData){
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

export default usefulCartData;