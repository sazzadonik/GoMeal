import React from 'react';
import { Link } from 'react-router-dom';
import pizzaImage from "../../images/pizza.png"

const Category = () => {
    return (
        <div className='m-5 w-100'>
            <div className='flex justify-between'>
            <h1 className='text-lg font-bold'>Category</h1>
            <Link to = "/#" className='text-amber-500 mr-3'> View All {'>'} </Link>
            </div>
            <div className='mt-5'>
                {/* flex */}
                <div className='md:w-32 w-full p-4 inline-block bg-white rounded-lg mb-2 mr-5'>
                    <img src={pizzaImage} className = "m-auto" width = "35px" alt="" srcset="" />
                    <h3 className='text-base text-center mt-2'>Bakery</h3>
                </div>

                <div className='md:w-32 w-full p-4 inline-block bg-white rounded-lg mb-2 mr-5'>
                    <img src={pizzaImage} className = "m-auto" width = "35px" alt="" srcset="" />
                    <h3 className='text-base text-center mt-2'>Bakery</h3>
                </div>

                <div className='md:w-32 w-full p-4 inline-block bg-white rounded-lg mb-2 mr-5'>
                    <img src={pizzaImage} className = "m-auto" width = "35px" alt="" srcset="" />
                    <h3 className='text-base text-center mt-2'>Bakery</h3>
                </div>

                <div className='md:w-32 w-full p-4 inline-block bg-white rounded-lg mb-2 mr-5'>
                    <img src={pizzaImage} className = "m-auto" width = "35px" alt="" srcset="" />
                    <h3 className='text-base text-center mt-2'>Bakery</h3>
                </div>

                <div className='md:w-32 w-full p-4 inline-block bg-white rounded-lg mb-2 mr-5'>
                    <img src={pizzaImage} className = "m-auto" width = "35px" alt="" srcset="" />
                    <h3 className='text-base text-center mt-2'>Bakery</h3>
                </div>

                <div className='md:w-32 w-full p-4 inline-block bg-white rounded-lg mb-2 mr-5'>
                    <img src={pizzaImage} className = "m-auto" width = "35px" alt="" srcset="" />
                    <h3 className='text-base text-center mt-2'>Bakery</h3>
                </div>

                <div className='md:w-32 w-full p-4 inline-block bg-white rounded-lg mb-2 mr-5'>
                    <img src={pizzaImage} className = "m-auto" width = "35px" alt="" srcset="" />
                    <h3 className='text-base text-center mt-2'>Bakery</h3>
                </div>

                <div className='md:w-32 w-full p-4 inline-block bg-white rounded-lg mb-2 mr-5'>
                    <img src={pizzaImage} className = "m-auto" width = "35px" alt="" srcset="" />
                    <h3 className='text-base text-center mt-2'>Bakery</h3>
                </div>

                {/* <div className='w-32 p-4 inline-block bg-white rounded-lg mb-2 mr-5'>
                    <img src={pizzaImage} className = "m-auto" width = "35px" alt="" srcset="" />
                    <h3 className='text-base text-center mt-2'>Bakery</h3>
                </div>

                <div className='w-32 p-4 inline-block bg-white rounded-lg mb-2 mr-5'>
                    <img src={pizzaImage} className = "m-auto" width = "35px" alt="" srcset="" />
                    <h3 className='text-base text-center mt-2'>Bakery</h3>
                </div>

                <div className='w-32 p-4 inline-block bg-white rounded-lg mb-2 mr-5'>
                    <img src={pizzaImage} className = "m-auto" width = "35px" alt="" srcset="" />
                    <h3 className='text-base text-center mt-2'>Bakery</h3>
                </div>

                <div className='w-32 p-4 inline-block bg-white rounded-lg mb-2 mr-5'>
                    <img src={pizzaImage} className = "m-auto" width = "35px" alt="" srcset="" />
                    <h3 className='text-base text-center mt-2'>Bakery</h3>
                </div>

                <div className='w-32 p-4 inline-block bg-white rounded-lg mb-2 mr-5'>
                    <img src={pizzaImage} className = "m-auto" width = "35px" alt="" srcset="" />
                    <h3 className='text-base text-center mt-2'>Bakery</h3>
                </div>

                <div className='w-32 p-4 inline-block bg-white rounded-lg mb-2 mr-5'>
                    <img src={pizzaImage} className = "m-auto" width = "35px" alt="" srcset="" />
                    <h3 className='text-base text-center mt-2'>Bakery</h3>
                </div>

                <div className='w-32 p-4 inline-block bg-white rounded-lg mb-2 mr-5'>
                    <img src={pizzaImage} className = "m-auto" width = "35px" alt="" srcset="" />
                    <h3 className='text-base text-center mt-2'>Bakery</h3>
                </div> */}



                
            </div>
        </div>
    );
};

export default Category;