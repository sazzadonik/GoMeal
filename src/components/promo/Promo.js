import React from 'react';
import { Link } from 'react-router-dom';
import productImage from "../../images/product.png"
import {AiFillStar} from "react-icons/ai";
import "./promo.css"

const Promo = () => {
    return (
        <div className='m-5'>
            <div className='flex justify-between'>
            <h1 className='text-lg font-bold'>Promo</h1>
            <Link to = "/#" className='text-amber-500 mr-3'> View All {'>'} </Link>
            </div>

            
            <div className='mt-5 md:inline-block block w-full'>
                {/* flex */}
                <div className='bg-white md:inline-block p-3 pt-5 mb-2 mr-2 md:w-72 w-full rounded-sm relative'>
                    <div className='rounded-r-lg mt-4 absolute bg-red-400 w-20 myPosition text-white'><p className='text-center'>15% off</p></div>
                    <div className='flex '>
                        {/* text div */}
                        <div className='w-36 m-auto mt-7'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Fish Burger</p>
                                
                            </div>
                            <div className='flex justify-between'>
                            <p>
                                <span className='font-bold text-amber-500'>$</span>
                                 5.59
                            </p>

                            <del>
                                <p>
                                    <span className='font-bold text-amber-500'>$</span>
                                     5.59
                                </p>
                            </del>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                <AiFillStar className='text-amber-500 mt-1' /><p>5.0</p>
                                </div>   
                             <p>1k+ reviews</p>
                            </div>
                        </div>
                        {/* Img div */}
                        <div>
                            <img src={productImage} width="100" className='rounded-lg mr-2' alt="" srcset="" />
                        </div>
                    </div>
                </div>

                <div className='bg-white md:inline-block p-3 pt-5 mb-2 mr-2 md:w-72 w-full rounded-sm relative'>
                    <div className='rounded-r-lg mt-4 absolute bg-red-400 w-20 myPosition text-white'><p className='text-center'>15% off</p></div>
                    <div className='flex '>
                        {/* text div */}
                        <div className='w-36 m-auto mt-7'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Fish Burger</p>
                                
                            </div>
                            <div className='flex justify-between'>
                            <p>
                                <span className='font-bold text-amber-500'>$</span>
                                 5.59
                            </p>

                            <del>
                                <p>
                                    <span className='font-bold text-amber-500'>$</span>
                                     5.59
                                </p>
                            </del>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                <AiFillStar className='text-amber-500 mt-1' /><p>5.0</p>
                                </div>   
                             <p>1k+ reviews</p>
                            </div>
                        </div>
                        {/* Img div */}
                        <div>
                            <img src={productImage} width="100" className='rounded-lg mr-2' alt="" srcset="" />
                        </div>
                    </div>
                </div>

                <div className='bg-white md:inline-block p-3 pt-5 mb-2 mr-2 md:w-72 w-full rounded-sm relative'>
                    <div className='rounded-r-lg mt-4 absolute bg-red-400 w-20 myPosition text-white'><p className='text-center'>15% off</p></div>
                    <div className='flex '>
                        {/* text div */}
                        <div className='w-36 m-auto mt-7'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Fish Burger</p>
                                
                            </div>
                            <div className='flex justify-between'>
                            <p>
                                <span className='font-bold text-amber-500'>$</span>
                                 5.59
                            </p>

                            <del>
                                <p>
                                    <span className='font-bold text-amber-500'>$</span>
                                     5.59
                                </p>
                            </del>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                <AiFillStar className='text-amber-500 mt-1' /><p>5.0</p>
                                </div>   
                             <p>1k+ reviews</p>
                            </div>
                        </div>
                        {/* Img div */}
                        <div>
                            <img src={productImage} width="100" className='rounded-lg mr-2' alt="" srcset="" />
                        </div>
                    </div>
                </div>

                <div className='bg-white md:inline-block p-3 pt-5 mb-2 mr-2 md:w-72 w-full rounded-sm relative'>
                    <div className='rounded-r-lg mt-4 absolute bg-red-400 w-20 myPosition text-white'><p className='text-center'>15% off</p></div>
                    <div className='flex '>
                        {/* text div */}
                        <div className='w-36 m-auto mt-7'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Fish Burger</p>
                                
                            </div>
                            <div className='flex justify-between'>
                            <p>
                                <span className='font-bold text-amber-500'>$</span>
                                 5.59
                            </p>

                            <del>
                                <p>
                                    <span className='font-bold text-amber-500'>$</span>
                                     5.59
                                </p>
                            </del>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                <AiFillStar className='text-amber-500 mt-1' /><p>5.0</p>
                                </div>   
                             <p>1k+ reviews</p>
                            </div>
                        </div>
                        {/* Img div */}
                        <div>
                            <img src={productImage} width="100" className='rounded-lg mr-2' alt="" srcset="" />
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    );
};

export default Promo;