import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider =(props)=>{

const audioRef = useRef(null);
const seekBg = useRef(null);
const seekBar = useRef(null);


const [track,setTrack] = useState(songsData[6]);
const [playStatus,setPlayStatus] = useState(false);
const [time,setTime] = useState({
       currentTime:{
        second:" --",
        minute:"-- ",
    },
    totalTime:{
        second:" --",
        minute:"-- ",
    },
});
useEffect(()=>{
    setTimeout(()=>{
        audioRef.current.ontimeupdate =(e)=>{
            seekBar.current.style.width = ((audioRef.current.currentTime / audioRef.current.duration)*100)+"%";
         setTime({

       currentTime:{
        second: Math.floor(audioRef.current.currentTime % 60),
        minute: Math.floor(audioRef.current.currentTime / 60),
    },
    totalTime:{
       second: Math.floor(audioRef.current.duration % 60),
        minute: Math.floor(audioRef.current.duration / 60),
    },

         })
        }
    },1000)


},[audioRef]);




const play =()=>{
    audioRef.current.play();
    setPlayStatus(true);
}
const pause = ()=>{
audioRef.current.pause();
setPlayStatus(false);
};

const playWithId =async (id) =>{
    await setTrack(songsData[id])
    await audioRef.current.play();
    setPlayStatus(true);
}

// before function to play the previous track


const before = async (id) => {
    if(track.id >0){
        await setTrack(songsData[track.id - 1]);
        await audioRef.current.play();
        setPlayStatus(true);
    }
}


// after function to play the next track

    const after = async () => {
        if (track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1]);
        }else {
            // If it's the last song, go back to the first one

            await setTrack(songsData[0]);
        }

        setPlayStatus(true);

            // Play after the track is updated

            setTimeout(() => {
                audioRef.current.play();
            }, 100); // slight delay to ensure audioRef updates

    };

// after run the songe in next

    useEffect(() => {
        const audio = audioRef.current;

        const handleTimeUpdate = () => {
            if (!audio.duration) return;
            seekBar.current.style.width = ((audio.currentTime / audio.duration) * 100) + "%";
            setTime({
                currentTime: {
                    second: Math.floor(audio.currentTime % 60),
                    minute: Math.floor(audio.currentTime / 60),
                },
                totalTime: {
                    second: Math.floor(audio.duration % 60),
                    minute: Math.floor(audio.duration / 60),
                },
            });
        };

        const handleEnded = () => {
            after(); // automatically play next song
        };

        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("ended", handleEnded);
        };
    }, [track]);



// seekBar functionality

const seekBarHandler = (e) => {

    audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
}



const contextValue ={
      
        audioRef,
        seekBar,
        seekBg,
        track,
        playStatus,
        time,
        setTrack,
        setPlayStatus,
        setTime,
        play,
        pause,
        playWithId,
        before,
        after,
        seekBarHandler,

    };
    return(
        <PlayerContext.Provider value={contextValue}>
             <audio ref={audioRef} src={track.audio} />
         {props.children}
        </PlayerContext.Provider>

    );

};

export default PlayerContextProvider