import React from 'react'
import Navbar from './Navbar'
import { albumsData, assets } from '../assets/assets'
import AlbumItem from './AlbumItem';
import { songsData } from '../assets/assets';
import SongItem from './SongItem';

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='mt-4'>
        <h1>Featured Charts</h1>
        <div className='my-5 font-bold text-2xl'>
          <div className='flex overflow-auto'>
            {albumsData.map((item, index) => (
              <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
            ))}
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <h1>Today's Biggest Hits</h1>
        <div className='my-5 font-bold text-2xl'>
          <div className='flex overflow-auto'>
            {songsData.map((item, index) => (
              <SongItem key={index} name={item.name} desc={item.desc} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default DisplayHome;
