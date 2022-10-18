import React from 'react';
import { Link } from 'react-router-dom';
import productImage from "../../images/product.png"
import {AiFillStar} from "react-icons/ai";

const Popular = () => {
    return (
        <div className='m-5'>
            <div className='flex justify-between'>
            <h1 className='text-lg font-bold'>Popular This</h1>
            <Link to = "/#" className='text-amber-500 mr-3'> View All {'>'} </Link>
            </div>

            
            <div className='mt-5 md:inline-block block w-full'>
            {/* md:flex */}
            <div className='bg-white inline-block p-4 mr-3 mb-2 md:w-72 rounded-sm'>
                    <div className='flex'>
                        <div>
                            <img src={productImage} width="70" className='rounded-lg mr-2' alt="" srcset="" />
                        </div>
                        <div className='w-44 m-auto'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Fish Burger</p>
                                <p className='font-bold'>...</p>
                            </div>
                            <p><span className='font-bold text-amber-500'>$</span> 5.59</p>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                <AiFillStar className='text-amber-500 mt-1' /><p>5.0</p>
                                </div>
                            
                             <p>1k+ user reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo!
                    </div>
                </div>

                <div className='bg-white inline-block p-4 mr-3 mb-2 md:w-72 rounded-sm'>
                    <div className='flex'>
                        <div>
                            <img src={productImage} width="70" className='rounded-lg mr-2' alt="" srcset="" />
                        </div>
                        <div className='w-44 m-auto'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Fish Burger</p>
                                <p className='font-bold'>...</p>
                            </div>
                            <p><span className='font-bold text-amber-500'>$</span> 5.59</p>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                <AiFillStar className='text-amber-500 mt-1' /><p>5.0</p>
                                </div>
                            
                             <p>1k+ user reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo!
                    </div>
                </div>

                <div className='bg-white inline-block p-4 mr-3 mb-2 md:w-72 rounded-sm'>
                    <div className='flex'>
                        <div>
                            <img src={productImage} width="70" className='rounded-lg mr-2' alt="" srcset="" />
                        </div>
                        <div className='w-44 m-auto'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Fish Burger</p>
                                <p className='font-bold'>...</p>
                            </div>
                            <p><span className='font-bold text-amber-500'>$</span> 5.59</p>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                <AiFillStar className='text-amber-500 mt-1' /><p>5.0</p>
                                </div>
                            
                             <p>1k+ user reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo!
                    </div>
                </div>

                <div className='bg-white inline-block p-4 mr-3 mb-2 md:w-72 rounded-sm'>
                    <div className='flex'>
                        <div>
                            <img src={productImage} width="70" className='rounded-lg mr-2' alt="" srcset="" />
                        </div>
                        <div className='w-44 m-auto'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Fish Burger</p>
                                <p className='font-bold'>...</p>
                            </div>
                            <p><span className='font-bold text-amber-500'>$</span> 5.59</p>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                <AiFillStar className='text-amber-500 mt-1' /><p>5.0</p>
                                </div>
                            
                             <p>1k+ user reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo!
                    </div>
                </div>         
    
            </div>
        </div>
    );
};

export default Popular;