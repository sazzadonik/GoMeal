import React from 'react';
import FoodItems from '../foodItems/FoodItems';
import OrderTracker from '../orderTracker/OrderTracker';
import SideBar from '../sideBar/SideBar';

const foodOrder = () => {
    return (
        <div className='flex'>
            <SideBar/>
            <FoodItems/>
            <OrderTracker/>
        </div>
    );
};

export default foodOrder;