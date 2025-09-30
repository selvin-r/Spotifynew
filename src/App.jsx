import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import Opening from './components/Opening';

function App() {

  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(()=>{

    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 5000.6); // Show splash for 4 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount

  },[])

  
  return (
    <> 
    {isSplashVisible && <Opening/>}
    <Home/>
   
    </>

  )

}

export default App
