import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import SongRequestBar from "./SongRequestBar";

const Sidebar = () => {

  const nav = useNavigate();




  return (
    <div className='w-[25%] h-full p-2 flex-col gap=2 text-white hidden lg:flex animate-slideInLeft'>

        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>


            {/* Home */}

            <div onClick={() => nav('/')} className='flex items-center gap-3 pl-8 cursor-pointer\
             transition duration-300 hover:scale-105 hover:text-green-400'>

                <img className='w-6' src ={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
             </div>

            {/* Search */}

             <div className='flex items-center gap-3 pl-8 cursor-pointer transition duration-300 hover:scale-105
              hover:text-green-400 '>
                <img className='w-6' src ={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
  </div>
   </div>

        {/* Library */}


   <div className='bg-[#121212] h-[85%] rounded overflow-y-auto animate-fadeIn'>
    <div className='p-4 flex items-center justify-between'>
      <div className=' flex items-center gap-3'>
        <img  className ='w-8' src={assets.stack_icon} alt=''/>
        <p className='font-semibold  hover:text-green-400  transition duration-300 hover:scale-105  '>Your Library</p>

</div>
<div className='flex iteams-center gap-3'>
  <img className='w-5 cursor-pointer hover:rotate-90 transition duration-300' src={assets.arrow_icon} alt=''/>
  <img className='w-5 cursor-pointer hover:rotate-90 transition duration-300' src={assets.plus_icon} alt=''/>

</div>
</div>

       {/* Playlist Card */}

<div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4
 transition duration-300  hover:text-green-400 animate-fadeIn  '>

  <h1>Create your first Playlist</h1>
  <p className='font-light'>it`s easy we will helo you</p>

  <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4
  hover:bg-gray-200 transition'>Create Playlist</button>

</div>

       {/* Podcasts Card */}


<div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1
pl-4 transition duration-300  hover:text-green-400 animate-fadeIn
 '>

  <h1>Find some Podcasts to follow</h1>
  <p className='font-light'>we`ll keep you update on new Episodes</p>
  <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4
  hover:bg-gray-200 transition'>Browes Podcasts</button>


</div>
       {/*SongRequestBar()*/}
       <div className={'m-1 gap-2 w-auto justify-center mt-20'}>
           < SongRequestBar />
       </div>
</div>
</div>
  )
}

export default Sidebar
