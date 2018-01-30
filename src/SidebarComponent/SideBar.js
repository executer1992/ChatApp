import React from 'react';
import Gielda from './Gielda';
import Zapytania from './Zapytania';
import Kanaly from './Kanaly';
import Rozmowy from './Rozmowy';
import './Sidebar.css';

class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div className='sidebar-menu'>
                <Gielda />
                <Zapytania />
                <Kanaly />
                <Rozmowy />
            </div>
        )
    }
}
export default Sidebar;