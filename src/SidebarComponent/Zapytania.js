import React from 'react';
import { Icon } from 'antd';

class Zapytania extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <div className='zapytania-container'>
                <div className='zapytania-header'>
                    <h3 className='zapytania-title'>Zapytania</h3>
                    <Icon type="arrow-right" />
                </div>
                <ul className='zapytania-list'>
                    <li className='zapytania-list-item'>
                    <Icon type="question-circle-o" />
                    <span>Firma X</span>                        
                    </li>
                    <li className='zapytania-list-item'>
                    <Icon type="question-circle-o" />
                    <span>Firma Y</span>                        
                    </li>
                </ul>
            </div>
        )
    }
}
export default Zapytania;