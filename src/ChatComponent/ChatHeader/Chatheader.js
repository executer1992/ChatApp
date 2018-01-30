import React from 'react';
import './chatheader.css';
import {
    Button,
    Input,
    Icon
} from 'antd';

class Chatheader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        active:true,
        };
    }

    render(){
        return(
            <div className='chat-header'>
               <div className='chat-header-user-info'>
                  <div className='chat-user-name'>
                    <span className='user-name'>Filip</span>
                  </div> 
                  <div className='chat-user-status'>
                    <Button icon="star-o" ></Button>
                    <div className='user-status'>
                        <span className='user-status-icon'></span>
                        <span className='user-status-text'>online</span>
                    </div>
                  </div> 
               </div>
               <div className='chat-header-options'>
               <Button icon="phone" ></Button>
               <Button icon="info-circle-o" ></Button>
               <Button icon="setting" ></Button>
               </div>
            </div>
        )
    }
}
export default Chatheader;