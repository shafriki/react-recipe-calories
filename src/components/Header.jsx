import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for the dropdown menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !event.target.closest('#bar')) {
        setIsMenuOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

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
          <a href="#recipes" className='hidden md:block hover:text-[#0BE58A] hover:font-semibold cursor-pointer'>Recipes</a>
          <a href="#about" className='hidden md:block hover:text-[#0BE58A] hover:font-semibold cursor-pointer'>About</a>
          <a href="#search" className='hidden md:block hover:text-[#0BE58A] hover:font-semibold cursor-pointer'>Search</a>
        </div>

        {/* profile */}
        <div className='hidden md:block'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1 bg-gray-100 rounded-full p-3'>
              <i className="fa-solid fa-magnifying-glass text-gray-400 hidden md:block"></i>
              <input type="text" placeholder='Search' className='bg-gray-100 focus:outline-none text-gray-400 hidden md:block' />
            </div>
            <div>
              <i className="hidden md:block fa-regular fa-user border border-sky-500 rounded-full p-3 bg-[#0BE58A] text-white border-none"></i>
            </div>
          </div>
        </div>

        {/* menu toggle icon */}
        <i
          className="fa-solid fa-bars block md:hidden cursor-pointer"
          id='bar'
          onClick={toggleMenu}
        ></i>
        
        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div 
            ref={dropdownRef} // Attach the ref to the dropdown
            className="lg:hidden flex flex-col items-start mt-2 absolute right-0 bg-white shadow-lg rounded-md z-50"
            style={{ top: '50px' }} // Adjust the position here if needed
          >
            <a href="#home" className="block w-full px-3 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#0E7A81] border-b border-gray-200">Home</a>
            <a href="#recipes" className="block w-full px-3 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#0E7A81] border-b border-gray-200">Recipes</a>
            <a href="#about" className="block w-full px-3 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#0E7A81] border-b border-gray-200">About</a>
            <a href="#search" className="block w-full px-3 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#0E7A81]">Search</a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
