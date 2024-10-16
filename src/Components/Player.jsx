import React, { useState } from 'react'
import { assets, songsData } from '../assets/assets'

const Player = () => {
  const [playState, setPlayState] = useState(assets.play_icon);
  const onClickPlay = () => {
    setPlayState((playState) =>
      playState === assets.play_icon ? assets.pause_icon : assets.play_icon
    );
  };

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4 '>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={songsData[0].image} alt="" />
        <div className=''>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4 items-center justify-center'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} />
          <img className='w-4 cursor-pointer' src={assets.prev_icon} />
          <img
            onClick={onClickPlay}
            className='w-4 cursor-pointer'
            src={playState}
            alt="Play/Pause"
          />
          <img className='w-4 cursor-pointer' src={assets.next_icon} />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} />
        </div>
        <div className='flex items-center gap-5'>
          <p>1:06</p>
          <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr className='h-1 border-none w-10 bg-green-800 rounded-full' />
          </div>
          <p>3:00</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2 opacity-80'>
        <img className='w-4 cursor-pointer' src={assets.play_icon} />
        <img className='w-4 cursor-pointer' src={assets.mic_icon} />
        <img className='w-4 cursor-pointer' src={assets.queue_icon} />
        <img className='w-4 cursor-pointer' src={assets.speaker_icon} />
        <img className='w-4 cursor-pointer' src={assets.volume_icon} />
        <div className='w-20 max-[70px] bg-slate-50 rounded-full cursor-pointer mt-1'>
          <hr className='h-1 border-none w-0 bg-green-800 rounded-full' />
        </div>
        <img className='w-4 cursor-pointer' src={assets.mini_player_icon} />
        <img className='w-4 cursor-pointer' src={assets.zoom_icon} />
      </div>
    </div>
  )
}

export default Player;
