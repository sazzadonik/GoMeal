import React from 'react';
import {Link} from "react-router-dom";
import {MdRestaurantMenu, MdFastfood, MdRateReview} from "react-icons/md"
import {AiFillDashboard, AiFillSetting} from "react-icons/ai"
  
const SideBar = () => {
    return (
       
        <div className = "w-72 h-screen bg-[#] ">
            <h2 className='text-center m-5 text-xl font-bold'>GoMeal.</h2>
            
            <div className='mt-5 bg-amber-500 p-2 rounded-lg w-36 m-auto flex items-center gap-3.5 text-white'>
                <AiFillDashboard />
                Dashboard</div>

            <div className='m-11 flex flex-col gap-4 relative'>
                <Link to = "/" className='flex items-center text-sm gap-3.5 font-medium p-2 text-zinc-400'> <MdRestaurantMenu/> 
                    <h2>Menu</h2>
                </Link>
            </div>

            <div className='m-11 flex flex-col gap-4 relative'>
                <Link to = "/foodOrder" className='flex items-center text-sm gap-3.5 font-medium p-2 text-zinc-400'> <MdFastfood/> 
                    <h2>Food Order</h2>
                </Link>
            </div>

            <div className='m-11 flex flex-col gap-4 relative'>
                <Link to = "/" className='flex items-center text-sm gap-3.5 font-medium p-2 text-zinc-400'> <MdRateReview/> 
                    <h2>Reviews</h2>
                </Link>
            </div>

            <div className='m-11 flex flex-col gap-4 relative'>
                <Link to = "/" className='flex items-center text-sm gap-3.5 font-medium p-2 text-zinc-400'> <AiFillSetting/> 
                    <h2>Setting</h2>
                </Link>
            </div>


            <div className='mt-10 m-auto mx-11 rounded-lg  w-25 bg-amber-500 p-5'>
                <p className='text-white'>Upgrade your accounts to get more benefits</p>
                <button class="bg-stone-50 text-black font-bold py-2 px-4 border mt-5 rounded-lg"> Upgrade</button>
            </div>
        </div>
    
    );
};

export default SideBar;