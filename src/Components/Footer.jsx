import React from 'react';
import { Link } from 'react-router-dom';
import {
//   FaDribbbleSquare,
  FaFacebookSquare,
//   FaGithubSquare,
  FaInstagram,
//   FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
      <Link to={"/"}>
      <h1 className=' italic w-full text-2xl font-bold text-[#00df9a] cursor-pointer hover:text-cyan-500'>NAVILA TANNA.</h1>
      </Link>

        <p className='py-4'>What changed in a year? Everything. Specially, the people you love.</p>
        <div className='flex justify-between md:w-[20%] my-6'>
          <a href="https://www.facebook.com/trishnarahman.nelemt.3">
          <FaFacebookSquare size={30} />
          </a>
            
            <a href="https://www.instagram.com/tanna_hsn?igsh=MWp2cHRmanJ0MmF1ZA==">
            <FaInstagram size={30} />
            </a>
            
            {/* <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} /> */}
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-cyan-300'>Go to Places</h6>
        <ul>
            <li className='py-2 text-sm'>Resturants with extra lighting</li>
            <li className='py-2 text-sm'>Shopping mall</li>
            <li className='py-2 text-sm'>Beaches under clouds</li>
            <li className='py-2 text-sm'>Amusemnt parks</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-cyan-300'>Food</h6>
        <ul>
            <li className='py-2 text-sm'>Rainbow Pastry</li>
            <li className='py-2 text-sm'>Kacchi</li>
            <li className='py-2 text-sm'>Fuchka</li>
            <li className='py-2 text-sm'>Cold drinks</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-cyan-300'>Clothes</h6>
        <ul>
            {/* <li className='py-2 text-sm'>Saare</li>
            <li className='py-2 text-sm'>Hata kata blouse</li>
            <li className='py-2 text-sm'>Tight jeans with heels</li>
            <li className='py-2 text-sm'>Selware Kamiz</li>
            <li className='py-2 text-sm'>Men wears</li> */}
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-cyan-300'>Movies</h6>
        <ul>
            <li className='py-2 text-sm'>500 days of summer</li>
            <li className='py-2 text-sm'>End of this fucking world</li>
            <li className='py-2 text-sm'>The Great Gatsby</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;