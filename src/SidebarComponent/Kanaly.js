import React from 'react';
import { Icon } from 'antd';

class Kanaly extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <div className='kanaly-container'>
                <div className='kanaly-header'>
                    <h3 className='kanaly-title'>Kanaly</h3>
                    <Icon type="arrow-right" />
                </div>
                <ul className='kanaly-list'>
                    <li className='kanaly-list-item'>
                    <span className='hash'>#</span>
                    <span>Firma X</span>                        
                    </li>
                    <li className='kanaly-list-item'>
                    <span className='hash'>#</span>
                    <span>Firma Y</span>                        
                    </li>
                </ul>
            </div>
        )
    }
}
export default Kanaly;