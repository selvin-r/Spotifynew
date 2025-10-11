import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import Opening from './components/Opening';
// import Login from './pages/Login';

function App() {

  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(()=>{

    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 5000.6); // Show splash for 4 seconds

    return () => clearTimeout(timer); // Cleanup timer

  },[])

  
  return (
    <> 
    {isSplashVisible && <Opening/>}
    <Home/>
        {/*<Login/>*/}
    </>

  )

}

export default App
