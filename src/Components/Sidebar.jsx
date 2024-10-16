import React from 'react'
import { assets } from '../assets/assets'

export const Sidebar = () => {
  return (
    <div className='w- %] h-full p-2 flex-col gap-2 text-white lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.home_icon} alt="Home Icon" />
          <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.search_icon} alt="Home Icon" />
          <p className='font-bold'>Search</p>
        </div>
      </div>
      <div className='bg-[#323131] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt=''></img>
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-start gap-3'>
            <img className='w-5' src={assets.arrow_icon}></img>
            <img className='w-5' src={assets.plus_icon}></img>
          </div>
        </div>
        <div className='p-4 bg-[#434343] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1 className='font-sans'>Create your first playlist</h1>
          <p className='font-sans'>It's easy we will help you </p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
        </div>
        <div className='p-4 bg-[#434343] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1 className='font-sans'>Let's findsome podcaste to follow</h1>
          <p className='font-sans'>we will keep you update on new episode </p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcaste</button>
        </div>

      </div>
    </div>
  )
}
