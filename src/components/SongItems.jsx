import React, { use, useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext';

const SongItems = (props) => {

  const {playWithId} = useContext(PlayerContext);

  return (
      <div
          onClick={() => playWithId(props.id)}
          className="max-w-[200px] min-h-[100px] p-2 px-3 rounded-lg cursor-pointer
      bg-transparent hover:bg-[#ffffff14] transition-all duration-500 ease-in-out
      hover:scale-105 hover:shadow-lg hover:shadow-green-700/20 group animate-fade-in"
      >
          {/* Image */}

          <div className="relative overflow-hidden rounded-lg">
              <img
                  className="rounded-lg min-w-[155px] max-h-[189px] transform transition-all
                  duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-110"
                  src={props.image}
                  alt=""
              />

        <p className='font-bold mt-2 mb-1 text-white group-hover:text-green-400
        transition-colors duration-300'>{props.name}</p>

        <p className='text-slate-200 text-sm'>{props.desc}</p>

    </div>
      </div>
  )
}

export default SongItems
