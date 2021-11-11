import Axios from 'axios'
import { setCookie } from 'Utils/Cookies';

export default function validateLoginInput(props){
    Axios.post("http://localhost:4000/login" , {
        mail : props.email,
        pass : props.pass
    }).then((response) => {
        console.log(response.data);
        switch(response.data){
            case true:
                setCookie("email" , props.email , 365);
                props.setRedirect(true);
                break;
            default:
                props.clearInputFields();
                props.setInvalidInput(true);
                break;
        }
    })
}