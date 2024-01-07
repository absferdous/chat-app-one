import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { HiMiniChatBubbleOvalLeft } from "react-icons/hi2";
import Cookies from "universal-cookie";
import Buttons from "./Buttons";

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
    <div className=' min-h-screen bg-gradient-to-r from-cornflower-400 to-cornflower-800 flex flex-col gap-6 justify-center '>
      <div className='flex justify-center items-center'>
        <h3 className='text-4xl text-center font-extrabold text-cornflower-950'>
          Text <br />
          <span className='text-white animate-pulse text-8xl'>Me</span>
        </h3>
        <HiMiniChatBubbleOvalLeft />
      </div>
      <div className='mt-10 flex justify-center items-center'>
        <Buttons label={"Sign with Google"} onclickfunc={signInWithGoogle} />
      </div>
    </div>
  );
};

export default Auth;
