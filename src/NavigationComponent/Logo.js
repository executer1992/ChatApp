import React from 'react';
import './Navigation.css';


class Logo extends React.Component{
    render(){
        return(
           <div className='logo-container'>
                <div className='logo'>
                    <span>FI</span>
                    <div className='status-circle-user'></div>
                </div>
           </div>
        )
    }
}
export default Logo;