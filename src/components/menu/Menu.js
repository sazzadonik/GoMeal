import React from 'react';
import MenuTop from '../menuTop/MenuTop';
import {MdCommentBank,MdOutlineSettingsSuggest} from "react-icons/md";
import {IoMdNotifications} from "react-icons/io";
import Category from '../category/Category';
import Popular from '../popular/Popular';
import BestSeller from '../bestSeller/BestSeller';


import Promo from '../promo/Promo'

const Menu = () => {
    return (
        
            <div className='bg-stone-100 w-full'>
                <div className='m-5 text-xl  text-gray-900  flex justify-between font-semibold'>
                    <div>
                    Menu
                    </div>
                    <div className='flex justify-between gap-3.5'> 
                        <MdCommentBank/>
                        <IoMdNotifications/>
                        <MdOutlineSettingsSuggest/>
                        <div className='w-8 bg-stone-400 rounded-lg'></div>
                        
                    </div>
                </div>

                <MenuTop/>
                <Category/>
                 <Popular/>
                <BestSeller/>
                <Promo/> 
                
            </div>
    );
};

export default Menu;