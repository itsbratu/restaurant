import Axios from 'axios'

export default function validateLoginInput(props){
    Axios.post("http://localhost:4000/login" , {
        mail : props.email,
        pass : props.pass
    }).then((response) => {
        console.log(response.data);
        switch(response.data){
            case true:
                props.setRedirect(true);
                break;
            case false:
                props.clearInputFields();
                props.setInvalidInput(true);
                break;
            case "Error!":
                props.clearInputFields();
                props.setInvalidInput(true);
                break;
        }
    })
}