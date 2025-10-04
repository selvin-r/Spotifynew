import React , { useContext,useEffect } from 'react';
import { assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  const { seekBar, seekBg, play, pause, playStatus,track,time,after,before,seekBarHandler } = useContext(PlayerContext);

  return (
    <div className='h-[10%] bg-gradient-to-r from-[#0a0a0a] via-black to-[#111] flex justify-between items-center
     text-white px-4 shadow-lg border-t border-gray-800 transition-all duration-700 ease-in-out'>

      {/* Left Side: Song Info */}

      <div className='hidden lg:flex items-center gap-4  animate-fade-in'>
        <img className='w-12 rounded-lg shadow-md hover:scale-105 hover:rotate-1
        transition-all duration-300 ease-in-out' src={track.image} alt='' />
        <div>
          <p className="font-semibold text-white">{track.name}</p>
          <p className="text-gray-400 text-sm">{track.desc.slice(0, 16) + '...'}</p>
        </div>
      </div>

      {/* Center: Controls */}

      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4  items-center'>
          <img className='w-4 cursor-pointer hover:scale-125
           transition-transform duration-300' src={assets.shuffle_icon} alt='' />
          <img onClick={before} className='w-4 cursor-pointer hover:scale-125 transition-transform duration-300'
               src={assets.prev_icon} alt='' />
          {
          playStatus ?(

              <img onClick={pause} className='w-4 cursor-pointer transition-all duration-300 animate-pulse'
                   src={assets.pause_icon} alt="" />
         ) :(
         <img onClick={play} className='w-6 cursor-pointer hover:scale-110 active:scale-90
         transition-all duration-300 hover:brightness-110' src={assets.play_icon} alt="" />

        )}


              <img onClick={after} className='w-4 cursor-pointer hover:scale-125
              transition-transform duration-300' src={assets.next_icon} alt='' />
          <img className='w-4 cursor-pointer
          hover:scale-125 transition-transform duration-300' src={assets.loop_icon} alt='' />
        </div>

        {/* Seek Bar */}

        <div className='flex items-center gap-5 text-sm'>
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div
            ref={seekBg} onClick={seekBarHandler}
            className='w-[60vw] max-w-[500px] bg-gray-700 h-1 rounded
            cursor-pointer overflow-hidden relative group'
          >
            <hr
              ref={seekBar}
              className='h-1 bg-green-500 rounded-full w-0 transition-all duration-300 group-hover:bg-green-400'
            />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>

      {/* Right Side: Extra Controls */}
      
      <div className='hidden lg:flex items-center gap-3 opacity-80 animate-fade-in-right'>
        <img className='w-4 hover:scale-125 transition-transform duration-300'
             src={assets.play_icon} alt='' />

        <img className='w-4 hover:scale-125 transition-transform duration-300'
             src={assets.mic_icon} alt='' />

        <img className='w-4 hover:scale-125 transition-transform duration-300'
             src={assets.queue_icon} alt='' />

        <img className='w-4 hover:scale-125 transition-transform duration-300'
             src={assets.speaker_icon} alt='' />

        <img className='w-4 hover:scale-125 transition-transform duration-300'
             src={assets.volume_icon} alt='' />

          <div className="w-20 bg-gray-500 h-1 rounded overflow-hidden">
              <div className="bg-green-500 h-1 w-[70%] animate-pulse"></div>
          </div>

        <img className='w-4 hover:scale-125 transition-transform duration-300'
             src={assets.mini_player_icon} alt='' />

        <img className='w-4 hover:scale-125 transition-transform duration-300'
             src={assets.zoom_icon} alt='' />
      </div>
    </div>
  );
};

export default Player;
