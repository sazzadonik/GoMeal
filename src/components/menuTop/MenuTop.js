import React from 'react';


const MenuTop = () => {

    return (
        <div className='md:flex  justify-between m-5 block'>
            <input type="text" id="search" name="search" value="search" className=' md:w-2/4 sm:w-full p-2 mt-3 rounded-lg' />
            <button class="bg-amber-500 text-white ml-2 font-medium py-2 px-4 border mt-5 rounded-lg "> Add new Menu</button>
        </div>
    );
};

export default MenuTop;