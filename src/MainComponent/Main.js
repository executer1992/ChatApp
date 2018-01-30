import React from 'react';
import Sidebar from '../SidebarComponent/SideBar';
import Chat from '../ChatComponent/Chat';
import Offers from '../OffersComponent/Offers';
import './Main.css';
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div className='main-container'>
               <Sidebar />
               <Chat />
               <Offers />              
            </div>
        )
    }
}
export default Main;