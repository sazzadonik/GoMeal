import React from 'react';
import Menu from '../menu/Menu';
import SideBar from '../sideBar/SideBar';

const DashBoard = () => {
    return (

        <div className="flex">
            <SideBar/>
            <Menu/>
        </div>
        
    );
};

export default DashBoard;