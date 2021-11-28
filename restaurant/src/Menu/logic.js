import Axios from 'axios';

function addToCart(user , idItem){
    const currEntry = {user : user , idItem : idItem , quantity : 1}
    Axios.post("http://localhost:4000/addUserItem" , {
        entry : currEntry ,
    }).then((response) => {
        console.log(response.data);
    })
}

export default addToCart;
