import React from 'react';
// Import the video using a relative path from your component file
import NewVidwoe from "../assets/Newlogo.mp4";

const Opening = () => {
    return (
        <div className='h-screen bg-[#121212] flex items-center justify-center'>
            <video
                className='w-[75%] object-cover mix-blend-screen'
                src={NewVidwoe}
                preload='auto'
                autoPlay
                loop
                muted
            />

        </div>
    );
};

export default Opening;