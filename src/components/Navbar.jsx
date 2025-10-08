import React, {useState} from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import Login from "../pages/Login.jsx";

const Navbar = () => {
  const nav= useNavigate();
    const [showLogin, setShowLogin] = useState(false);
  return (
   <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
        <img onClick={()=>nav(-1)}className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
             src={assets.arrow_left} alt=''/>
      <img onClick={()=>nav(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
           src={assets.arrow_right} alt=''/>
      </div>
  <div className='flex items-center gap-4'>
    <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
    <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>

      {/* ✅ Change this line: use setShowLogin instead of nav('/Login') */}
      <button
          onClick={() => setShowLogin(true)}
          className='bg-white py-1 px-3 rounded-2xl text-black text-[15px] cursor-pointer'
      >
          Login
      </button>

</div>

 </div>
  <div className='flex items-center gap-4 mt-4'>
   <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer '>ALL</p>
    {/*<p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>*/}
      <a
          href="https://www.youtube.com/@RajendranDandapani/featured"  // playlist link
          // target="_blank"  // opens in new tab
          rel="noopener noreferrer"
      >
          <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer hover:bg-gray-800 transition">
              Podcasts
          </p>
      </a>

      <a href="http://radio.garden"
          target="_blank"
          rel="noopener noreferrer"
>
          <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer hover:bg-gray-800 transition">
              World FM
          </p>
      </a>

  </div>

       {/* ✅ Show login component conditionally */}
       {showLogin && (
           <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'>
               <div className='relative w-full max-w-md'>
                   {/* Close Button */}
                   <button
                       onClick={() => setShowLogin(false)}
                       className='absolute top-2 right-2 text-white text-2xl'
                   >
                       ✕
                   </button>
                   <Login />
               </div>
           </div>
       )}
    
   </>
  )
}

export default Navbar
