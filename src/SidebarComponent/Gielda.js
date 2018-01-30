import React from 'react';

import { Icon } from 'antd';

class Gielda extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <div className='gielda-container'>
                <div className='gielda-header'>
                    <h3 className='gielda-title'>Giełda</h3>
                    <Icon type="arrow-right" />
                </div>
                <ul className='gielda-list'>
                    <li className='gielda-list-item'>
                    <Icon type="flag" />
                    <span>PL-DE</span>                        
                    </li>
                    <li className='gielda-list-item'>
                    <Icon type="area-chart" />
                    <span>DE-FR</span>                        
                    </li>
                </ul>
            </div>
        )
    }
}
export default Gielda;