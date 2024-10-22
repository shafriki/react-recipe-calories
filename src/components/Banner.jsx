import React from 'react';

const Banner = () => {
    return (
        <div className='px-1 md:px-0'>
            <div className=' bg-cover bg-no-repeat rounded-3xl md:w-full h-full md:h-[35.5rem] mb-10' style={{backgroundImage: 'url(https://i.ibb.co.com/3kYtv41/banner.png)'}}>
            <div className='text-white flex flex-col items-center justify-center w-9/12 mx-auto h-full text-center py-5 md:py-0'>
            <h3 className='text-xl md:text-5xl font-bold'>Discover an exceptional cooking <br />class tailored for you!</h3>
            <p className='text-xs md:text-lg font-normal md:w-4/5 my-3 md:my-6'>Explore tasty recipes and track calories easily with our user-friendly Recipe Calories website for healthy cooking.</p>
            <div className='flex items-center gap-8'>
                <button className='btn rounded-full text-xs md:text-xl md:font-semibold bg-[#0BE58A] border-none'>Explore Now</button>
                <button className='btn rounded-full text-xs md:text-xl md:font-semibold bg-transparent border-2 border-white text-white hover:text-gray-700'>Our Feedback</button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;