import React from 'react';
import {ReactTyped} from 'react-typed';
import { Link } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';


const Hero = () => {
  // const navigate = useNavigate();

  return (
    <>
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='text-[#00df9a] text-1xl font-bold p-2'>[growing old is mandatory but growing up is optional] </p>
       <div className='flex justify-center items-center'>
       <h1 className='md:text-3xl sm:text-1xl text-1xl font-medium md:py-6'>I’m Navila, and I’m pretty sure I’m </h1>
        <ReactTyped 
           className='md:text-3xl sm:text-1xl text-1xl font-medium text-[#35d18e] pl-3 md:py-6'
           strings={['a Psycopath', 'Overthinker', "Angry Bitch", 'Attractive', 'Sweet', 'Stunning', 'Lovely']}
            typeSpeed={120} backSpeed={140} loop/>
       </div>
         <div className='flex justify-center items-center'>
           <p className='md:text-4xl sm:text-3xl text-xl font-mono text-[#596196] py-4'>Trapped in my head for</p>
           <ReactTyped 
           className='md:text-4xl sm:text-3xl text-xl font-mono text-[#67aad0] pl-2'
           strings={['Imaginary', 'Illusions']} typeSpeed={120} backSpeed={140} loop/>
         </div>
         <p className='md:text-2xl text-xl font-bold text-gray-500 pt-3'>Sometimes I think I feel more like myself with you than I do on my own.</p>
         <div>
          <Link to={"/details"}>
          <button className='bg-[#00df9a] w-[130px] hover:bg-blue-300 hover:text-blue-600 text-black text-[19px] font-semibold px-2 rounded-md my-6 mx-auto py-2'>Get a Tour</button>
          </Link>
         </div>
      </div>
    </div>
    </>
   
  );
};

export default Hero;


