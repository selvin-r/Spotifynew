import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import Player from './Player';
import Display from './Display';
import { PlayerContext } from '../context/PlayerContext';
const Home = () => {

const { audioRef,track } = useContext(PlayerContext);


 return(
  
  <div className="h-screen bg-gradient-to-br from-[#050505] via-[#0a0a0a]
  to-[#111] text-white overflow-hidden flex flex-col animate-fade-in">

      {/* Top Section */}

    <div className='flex flex-1 h-[90%] relative'>
      <Sidebar/>
      <Display/>
    </div>

    <Player/>
    <audio ref={audioRef} src={track.file} preload='auto'></audio>
  </div>


  )
}

export default Home;
