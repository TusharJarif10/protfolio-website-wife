import React from 'react';
// import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-6 text-white'>
      <Link to={"/"}>
      <h1 className=' italic w-full text-2xl font-bold text-[#00df9a] cursor-pointer hover:text-cyan-500'>NAVILA TANNA.</h1>
      </Link>
     
      <ul className='hidden md:flex italic'>

        <Link to={"/about"}>
        <li className='p-4 pr-7 font-semibold cursor-pointer hover:text-cyan-300 hover:text-[1.2rem]'>About.</li>
        </Link>
        
        <Link to={"/lifestyle"}>
        <li className='p-4 pr-7 font-semibold cursor-pointer hover:text-cyan-300 hover:text-[1.2rem]'>LifeStyle.</li>
        </Link>

        <Link to={"/lovelife"}>
        <li className='p-4 pr-7 font-semibold cursor-pointer hover:text-cyan-300 hover:text-[1.2rem]'>Letters.</li>
        </Link>

      </ul>

      {/* <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <RiCloseFill size={20} /> : <RiMenu3Fill size={20} />}
      </div>
      <ul className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-black bg-[#000000] ease-in-out duration-500' :'ease-in-out duration-500 fixed left-[-100%]'} >
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 cursor-pointer italic '>NAVILA.</h1>
         <li className='p-4 font-bold border-b border-gray-600 cursor-pointer'>About</li>
         <li className='p-4 font-bold border-b border-gray-600 cursor-pointer'>LifeStyle</li>
         <li className='p-4 font-bold border-b border-gray-600 cursor-pointer'>LoveLife</li>
         <li className='p-4 font-bold cursor-pointer'>SocialMedia</li>
        </ul>  */}
      </div>
  );
};

export default Navbar;
