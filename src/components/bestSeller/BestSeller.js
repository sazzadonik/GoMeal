import React from 'react';
import { Link } from 'react-router-dom';
import productImage from "../../images/product.png"
import {MdOutlineVerticalAlignTop} from "react-icons/md";

const BestSeller = () => {
    return (
        <div className='m-5'>
            <div className='flex justify-between'>
                <h1 className='text-lg font-bold'>Best Seller</h1>
                <Link to = "/#" className='text-amber-500 mr-3'> View All {'>'} </Link>
            </div>





            <div className='mt-5 md:inline-block block w-full'>
                {/* flrx */}
                <div className='md:w-48 inline-block w-full p-4 pt-6 mb-3  bg-white rounded-lg mr-3'>
                    <img src={productImage} className = "m-auto rounded-lg" width = "90%" alt="" srcset="" />
                    <h3 className='text-center mt-2  text-lg'>Japanese Ramen</h3>
                    <h2 className='text-center font-bold text-xl m-2'><span className=' text-amber-500 '>$</span> 5.59</h2>

                    <div className='flex justify-around'>
                        <h2 className='text-stone-500'>Sold 1k</h2>
                        <h2 className='text-lime-600 font-bold text-xl'>+ 15% </h2>
                        <MdOutlineVerticalAlignTop className='mt-1 text-lime-600 font-bold text-xl'/>
                    </div>
                </div>


                <div className='md:w-48 inline-block w-full p-4 pt-6 mb-3  bg-white rounded-lg mr-3'>
                    <img src={productImage} className = "m-auto rounded-lg" width = "90%" alt="" srcset="" />
                    <h3 className='text-center mt-2  text-lg'>Japanese Ramen</h3>
                    <h2 className='text-center font-bold text-xl m-2'><span className=' text-amber-500 '>$</span> 5.59</h2>

                    <div className='flex justify-around'>
                        <h2 className='text-stone-500'>Sold 1k</h2>
                        <h2 className='text-lime-600 font-bold text-xl'>+ 15% </h2>
                        <MdOutlineVerticalAlignTop className='mt-1 text-lime-600 font-bold text-xl'/>
                    </div>
                </div>


                <div className='md:w-48 inline-block w-full p-4 pt-6 mb-3  bg-white rounded-lg mr-3'>
                    <img src={productImage} className = "m-auto rounded-lg" width = "90%" alt="" srcset="" />
                    <h3 className='text-center mt-2  text-lg'>Japanese Ramen</h3>
                    <h2 className='text-center font-bold text-xl m-2'><span className=' text-amber-500 '>$</span> 5.59</h2>

                    <div className='flex justify-around'>
                        <h2 className='text-stone-500'>Sold 1k</h2>
                        <h2 className='text-lime-600 font-bold text-xl'>+ 15% </h2>
                        <MdOutlineVerticalAlignTop className='mt-1 text-lime-600 font-bold text-xl'/>
                    </div>
                </div>


                <div className='md:w-48 inline-block w-full p-4 pt-6 mb-3  bg-white rounded-lg mr-3'>
                    <img src={productImage} className = "m-auto rounded-lg" width = "90%" alt="" srcset="" />
                    <h3 className='text-center mt-2  text-lg'>Japanese Ramen</h3>
                    <h2 className='text-center font-bold text-xl m-2'><span className=' text-amber-500 '>$</span> 5.59</h2>

                    <div className='flex justify-around'>
                        <h2 className='text-stone-500'>Sold 1k</h2>
                        <h2 className='text-lime-600 font-bold text-xl'>+ 15% </h2>
                        <MdOutlineVerticalAlignTop className='mt-1 text-lime-600 font-bold text-xl'/>
                    </div>
                </div>



                <div className='md:w-48 inline-block w-full p-4 pt-6 mb-3  bg-white rounded-lg mr-3'>
                    <img src={productImage} className = "m-auto rounded-lg" width = "90%" alt="" srcset="" />
                    <h3 className='text-center mt-2  text-lg'>Japanese Ramen</h3>
                    <h2 className='text-center font-bold text-xl m-2'><span className=' text-amber-500 '>$</span> 5.59</h2>

                    <div className='flex justify-around'>
                        <h2 className='text-stone-500'>Sold 1k</h2>
                        <h2 className='text-lime-600 font-bold text-xl'>+ 15% </h2>
                        <MdOutlineVerticalAlignTop className='mt-1 text-lime-600 font-bold text-xl'/>
                    </div>
                </div>



                <div className='md:w-48 inline-block w-full p-4 pt-6 mb-3  bg-white rounded-lg'>
                    <img src={productImage} className = "m-auto rounded-lg" width = "90%" alt="" srcset="" />
                    <h3 className='text-center mt-2  text-lg'>Japanese Ramen</h3>
                    <h2 className='text-center font-bold text-xl m-2'><span className=' text-amber-500 '>$</span> 5.59</h2>

                    <div className='flex justify-around'>
                        <h2 className='text-stone-500'>Sold 1k</h2>
                        <h2 className='text-lime-600 font-bold text-xl'>+ 15% </h2>
                        <MdOutlineVerticalAlignTop className='mt-1 text-lime-600 font-bold text-xl'/>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default BestSeller;