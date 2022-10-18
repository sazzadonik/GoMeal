import React from 'react';
import SingleOrder from '../singleOrder/SingleOrder';

const FoodItems = () => {
    return (
        <div className='bg-stone-100 w-3/4'>
            <div className='m-5 text-xl  text-gray-900  flex justify-between font-semibold'>
                    <div className='md:flex block justify-between w-full m-auto'>
                        <h2 className='font-bold mt-2 mb-2 '>Food Order</h2>
                        <input type="text"  placeholder= "Search" className=' md:w-2/4 w-full p-2  rounded-lg' />
                    </div>
                </div>

            <div className='inline-block '>
            {/* <div className='grid grid-cols-3'> */}
                <SingleOrder/>
                <SingleOrder/>
                <SingleOrder/>
                <SingleOrder/>
                <SingleOrder/>
                <SingleOrder/>  
            </div>
                
        </div>
    );
};

export default FoodItems;