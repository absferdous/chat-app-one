import React, { useRef } from "react";
import { HiMiniArrowDown } from "react-icons/hi2";
import Buttons from "./Buttons";

const SetRoom = ({ setroom, room }) => {
  const roomInputRef = useRef();
  return (
    <div
      className=' absolute w-full top-0 bg-gradient-to-r from-cornflower-400 to-cornflower-800
     min-h-screen py-5 flex flex-col  gap-3 justify-center items-center border-2 border-cornflower-200  '
    >
      <div className='flex flex-col justify-center items-center'>
        <label className='  text-3xl font-mono font-extrabold mb-8  text-white z-10'>
          SET A
          <span className='  text-8xl'>
            <br />R
            <span className=' text-cornflower-100 animate-pulse'>OO</span>M{" "}
            <br />
          </span>
          {/* FOR starting the conversation
          <br />
          room name should be same for both ends */}
        </label>

        <input
          ref={roomInputRef}
          className=' border-2  border-corn-700 rounded-2xl px-7 py-4 '
          placeholder=' Ex: room5 '
        />

        <Buttons
          label={"makeroom"}
          onclickfunc={() => setroom(roomInputRef.current.value)}
        />
      </div>
    </div>
  );
};

export default SetRoom;
