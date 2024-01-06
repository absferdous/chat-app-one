import React, { useRef } from "react";
import { HiMiniArrowDown } from "react-icons/hi2";

const SetRoom = ({ setroom }) => {
  const roomInputRef = useRef();
  return (
    <div className=' min-h-lvh py-5 flex flex-col m-4 gap-3 justify-center items-center border-2 border-black rounded-3xl'>
      <div className='flex flex-col justify-center items-center'>
        <label className=' text-6xl font-mono font-extrabold mb-8'>
          Chat
          <span className='  text-8xl'>
            R<span className=' text-teal-700 animate-pulse'>oo</span>m{" "}
          </span>
          <br />
        </label>

        {/* <HiMiniArrowDown /> */}
        <input
          ref={roomInputRef}
          className=' border-2 border-black rounded-2xl px-5 '
          placeholder=' Enter a room name'
        />
        <button
          onClick={() => setroom(roomInputRef.current.value)}
          className='   min-h-9 mt-12 rounded-3xl hover:bg-white hover:text-black px-16 border-2 border-black bg-neutral-800 text-white'
        >
          makeRoom
        </button>
      </div>
    </div>
  );
};

export default SetRoom;
