import React from 'react';
import {AiFillStar} from "react-icons/ai";
import productImage from "../../images/product.png";

const SingleOrder = () => {
    return (
            <div className=' md:inline-block md:w-72 bg-white m-2 p-3 rounded-lg'>
                {/* w-1/3 */}
            <h1 className='text-center font-bold'>Order #1</h1>
            <p className='text-sm text-center mb-2 text-stone-400'>Nov 11,2021 10:38PM</p>
            <hr className='m-1' />
            <p className='text-lg'>Fish Burger</p>
            <div className='flex justify-between'>
                <div className='flex gap-3.5'>
                <AiFillStar className='text-amber-500 mt-1' /><p>5.0</p>
                </div>
                <p>1k+ reviews</p>
            </div>
            <hr className='m-1' />
            <div className='flex justify-between'>
                <p className='text-stone-400'>Delivery Time</p>
                <p>10min</p>
            </div>

            <div className='flex justify-between'>
                <p className='text-stone-400'>Distance</p>
                <p>2.5km</p>
            </div>
            <hr className='m-1' />

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
            <hr className='m-1' />
            <div className="flex justify-between mb-2">
                <p className='font-bold'>Total</p>
                <p className='font-bold'><span className=' text-amber-500 '>$</span>11.18</p>
            </div>
            <button className="bg-blue-500 m-auto block hover:bg-blue-700 text-white font-bold py-2 px-12 border border-blue-700 rounded-lg">
                Completed
            </button>
        
        </div>
    );
};

export default SingleOrder;