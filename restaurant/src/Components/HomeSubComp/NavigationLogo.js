import React from 'react'

const NavigationLogo = (props) =>{
    return(
        <div className = 'nav-logo'>
            <img src={props.logo} alt = 'noodles' className = 'nav-logo-image'/>
            <div className = 'nav-logo-text'>
                <h4 class = "noselect">pasterino</h4>
            </div>
        </div>
    );
}

export default NavigationLogo;
