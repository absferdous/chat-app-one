import React from "react";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";

import { auth } from "../firebase-config";

const SignOut = ({ signout }) => {
  return (
    <>
      <div className='rounded-3xl shadow-2xl px-3 mt-1 flex justify-between items-center gap-6 bg-neutral-900 mx-1'>
        {auth.currentUser && (
          <img
            className=' rounded-full'
            width={25}
            height={25}
            src={auth.currentUser.photoURL}
            alt={auth.currentUser.displayName}
          />
        )}
        <button
          className='  mb-3 mt-3 rounded-2xl hover:bg-white hover:text-black px-8 py-2 border-2 border-black bg-neutral-800 text-white'
          onClick={signout}
        >
          <div className='flex items-center gap-2 '>
            <p className=' text-md'>signout</p>{" "}
            <HiMiniArrowLeftOnRectangle style={{ width: 23, height: 23 }} />
          </div>
        </button>
      </div>
      ;
    </>
  );
};

export default SignOut;
