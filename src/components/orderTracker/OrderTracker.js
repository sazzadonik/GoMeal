import React from 'react';
import {MdCommentBank,MdOutlineSettingsSuggest} from "react-icons/md";
import {IoMdNotifications} from "react-icons/io";
import {MdLocationOn} from "react-icons/md";
import productImage from "../../images/product.png";

const OrderTracker = () => {
    return (
        <div className='w-1/4'>
            <div className='m-5 text-xl  text-gray-900  flex justify-between font-semibold'>
                    <div>Menu</div>
                    <div className='flex justify-between gap-3.5'> 
                        <MdCommentBank/>
                        <IoMdNotifications/>
                        <MdOutlineSettingsSuggest/>
                        <div className='w-8 bg-stone-400 rounded-lg'></div>
                    </div>
                </div>

                <div className='p-6'>
                    <img src={productImage} alt="" srcset="" />
                    <p className='mt-1 text-stone-400'>Your Address</p>
                    <div className="flex">
                    <span className=' mt-2 text-amber-500 '><MdLocationOn/></span>
                        <p className='text-lg gap-3'>Elm Street 23</p>
                    </div>
                    <p className='mt-1 text-sm text-stone-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, dignissimos.</p>
                </div>

                <div className='p-3'>
                <p className='text-lg'>Order Menu</p>
                <div className="inline mt-2">
                <img src={productImage} width="35" className=' inline rounded-lg mr-2' alt="" srcset="" />
                <div className='inline'>
                    <p className='font-bold inline'>Fish Burger</p>
                    <div className="flex justify-between">
                        <h3 className='text-sm ml-10'>X1</h3>
                        <h2 className='font-bold text-sm'>+ <span className=' text-amber-500 '>$</span> 5.59</h2>
                    </div>
                </div>
            </div>

            <div className="inline mt-2">
                <img src={productImage} width="35" className=' inline rounded-lg mr-2' alt="" srcset="" />
                <div className='inline'>
                    <p className='font-bold inline'>Cheese Burger</p>
                    <div className="flex justify-between">
                        <h3 className='text-sm ml-10'>X1</h3>
                        <h2 className='font-bold text-sm'>+ <span className=' text-amber-500 '>$</span> 5.59</h2>
                    </div>
                </div>
            </div>

            <div className="inline mt-2">
                <img src={productImage} width="35" className=' inline rounded-lg mr-2' alt="" srcset="" />
                <div className='inline'>
                    <p className='font-bold inline'>Cheese Burger</p>
                    <div className="flex justify-between">
                        <h3 className='text-sm ml-10'>X1</h3>
                        <h2 className='font-bold text-sm'>+ <span className=' text-amber-500 '>$</span> 5.59</h2>
                    </div>
                </div>
            </div>
            </div>


            <hr className='m-1' />
            <div className="flex justify-between mb-2 p-3">
                <p className='font-bold'>Total</p>
                <p className='font-bold'><span className=' text-amber-500 '>$</span>16.77</p>
            </div>
            <button className="bg-yellow-100 m-auto mt-7 block  text-yellow-400 font-bold py-2 px-12 border border-yellow-400 rounded-lg">
                Delivering To You
            </button>
        </div>
    );
};

export default OrderTracker;