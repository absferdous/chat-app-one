import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { HiMiniChatBubbleOvalLeft } from "react-icons/hi2";
import Cookies from "universal-cookie";
const Auth = ({ setisAuth }) => {
  const cookies = new Cookies();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setisAuth(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className=' min-h-screen bg-neutral-200 flex flex-col gap-6 justify-center '>
      <div className='flex justify-center items-center'>
        <h3 className='text-4xl text-center font-extrabold'>
          Text <br />
          {/* <HiMiniChatBubbleOvalLeft /> */}
          <span className='text-white animate-pulse text-8xl'>Me</span>
        </h3>
        <HiMiniChatBubbleOvalLeft />
      </div>

      <div className='mt-10 flex justify-center items-center'>
        <button
          className=' animate-wiggle skew-x-3 min-h-9 mt-12 rounded-3xl hover:bg-white hover:text-black px-16 border-2 border-black bg-neutral-800 text-white'
          onClick={signInWithGoogle}
        >
          Sign with Google
        </button>
      </div>
    </div>
  );
};

export default Auth;
