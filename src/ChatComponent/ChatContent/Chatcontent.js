import React from 'react';
import './chatcontent.css';
import {
    Avatar
} from 'antd';

class Chatcontent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        active:true,
        };
    }

    render(){
        return(
            <div className='chat-content-container'>
                <div className='chat-box'>
                    <div className='chat-contet-avatar-box'>
                        <Avatar type='square' src="https://i.imgur.com/M8kcy3k.png" />
                    </div>
                    <div className='chat-msg-box'>
                    <div className='chat-info'>
                        <span>Filip</span>
                        <span>3:40PM</span>   
                    </div>
                    <ul>
                        <li>Hello World</li>
                        <li>Hello World</li>
                        <li>Hello World</li>
                        <li>Hello World</li>
                    </ul>
                    </div>
                </div>
                <div className='chat-box'>
                    <div className='chat-contet-avatar-box'>
                        <Avatar type='square' src="https://images.8tracks.com/cover/i/000/839/738/dope-420-capsule-collection-02-1566.jpg?rect=166,0,667,667&q=98&fm=jpg&fit=max&w=640&h=640" />
                    </div>
                    <div className='chat-msg-box'>
                    <div className='chat-info'>
                        <span>Filip</span>
                        <span>3:40PM</span>   
                    </div>
                    <ul>
                        <li>Hello World</li>
                        <li>Hello World</li>
                        <li>Hello World</li>
                        <li>Hello World</li>
                    </ul>
                    </div>
                </div>        
            </div>
        )
    }
}
export default Chatcontent;