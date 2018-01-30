import React from 'react';
import { Icon,Badge } from 'antd';

class Rozmowy extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <div className='rozmowy-container'>
                <div className='rozmowy-header'>
                    <h3 className='rozmowy-title'>Rozmowy</h3>
                    <Icon type="arrow-right" />
                </div>
                <ul className='rozmowy-list'>
                    <li className='rozmowy-list-item'>
                    <div className='rozmowy-logo'>
                    <span>FI</span>
                    <div className='status-circle'></div>
                    </div>
                    <div className='user-info'>
                    <span>Jan Kowalski</span>      
                    <span>Firma X</span>                  
                    </div>   
                    <Badge count={25} />            
                    </li>
                    <li className='rozmowy-list-item'>
                    <div className='rozmowy-logo'>
                    <span>FI</span>                
                    <div className='status-circle'></div>
                    </div>
                    <div className='user-info'>
                    <span>Jan Kowalski</span>      
                    <span>Firma Y</span>      
                    </div>
                    <Badge count={25} />                        
                    </li>
                </ul>
            </div>
        )
    }
}
export default Rozmowy;