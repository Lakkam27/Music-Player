import React from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
   return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
      <div className='flex items-center gap-2'>
        <img onClick={()=>navigate(-1)}className='w-4 bg-black p*2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
        <img onClick={()=>navigate(1)} className='w-4 bg-black p*2 rounded-2xl cursor-pointer'src={assets.arrow_right} alt="" />

      </div>

      <div className='flex items-center gap-4'>
        <p className='bg-white text-black text-[15px] justify-center  px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
        <p className='bg-black text-white text-[15px] px-4 py-1  justify-center rounded-2xl hidden md:block cursor-pointer'>Install App</p>
        <p className="bg-purple-700 w-7 h-7  rounded-full items-center  flex justify-center text-black cursor-pointer">X</p>
      </div>
       </div>
       <div className='flex items-center gap-2 mt-4'>
         <p className='bg-white text-black   px-3 py-0.5  justify-center rounded-2xl  cursor-pointer '>All</p>
         <p className='bg-black text-white   px-3 py-0.5  justify-center rounded-2xl  cursor-pointer '>music</p>
         <p className='bg-black text-white   px-3 py-0.5  justify-center rounded-2xl  cursor-pointer '>podcaste</p>
       </div>
       </>


  )
}

export default Navbar;
