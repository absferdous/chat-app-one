import React from "react";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";

import { auth } from "../firebase-config";
import Buttons from "./Buttons";

const SignOut = ({ signout }) => {
  return (
    <>
      <div className='  border-cornflower-400  bg-gradient-to-r from-cornflower-500 to-cornflower-900 relative z-10 rounded  px-3 mt-1 flex justify-between items-center gap-6  mx-1'>
        {auth.currentUser && (
          <img
            className=' rounded-full'
            width={35}
            height={35}
            src={auth.currentUser.photoURL}
            alt={auth.currentUser.displayName}
          />
        )}

        <Buttons
          label={"signout"}
          onclickfunc={signout}
          icon={<HiMiniArrowLeftOnRectangle />}
        />
      </div>
      ;
    </>
  );
};

export default SignOut;
