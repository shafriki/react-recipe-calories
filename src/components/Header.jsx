import React from 'react';

const Header = () => {
    return (
        <div className='py-7 px-3 md:px-0'>
            <nav className='flex md:flex-row justify-between items-center'>
                {/* logo */}
                <div>
                    <h3 className='text-xl md:text-3xl font-bold'>Recipe Calories</h3>
                </div>

                {/* menu bar */}
                <div className='flex gap-12 text-base font-normal text-[#150B2BB3]'>
                    <a href="#home" className='hidden md:block hover:text-[#0BE58A] hover:font-semibold cursor-pointer'>Home</a>
                    <a href="#home" className='hidden md:block hover:text-[#0BE58A] hover:font-semibold cursor-pointer'>Recipes</a>
                    <a href="#home" className='hidden md:block hover:text-[#0BE58A] hover:font-semibold cursor-pointer'>About</a>
                    <a href="#home" className='hidden md:block hover:text-[#0BE58A] hover:font-semibold cursor-pointer'>Search</a>
                </div>

                {/* profile */}
                <div className='hidden md:block'>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-1 bg-gray-100 rounded-full p-3'>
                    <i className="fa-solid fa-magnifying-glass text-gray-400 hidden md:block"></i>
                    <input type="text" placeholder='Search' className='bg-gray-100 focus:outline-none text-gray-400 hidden md:block'/>
                    </div>
                    <div>
                    <i className="hidden md:block fa-regular fa-user border border-sky-500 rounded-full p-3 bg-[#0BE58A] text-white border-none"></i>
                    </div>
                </div>
                </div>
                <i className="fa-solid fa-bars block md:hidden" id='bar'></i>
            </nav>
        </div>
    );
};

export default Header;