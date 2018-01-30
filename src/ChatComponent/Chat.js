import React from 'react';
import './Chat.css';
import Chatheader from './ChatHeader/Chatheader';
import Chatcontent from './ChatContent/Chatcontent';
import {Divider} from 'antd';
class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <div className='chat-container'>
                <Chatheader />
                <Chatcontent />
            </div>
        )
    }
}
export default Chat;