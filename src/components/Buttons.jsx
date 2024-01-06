import React from "react";

const Buttons = ({ icon, label, onclickfunc }) => {
  return (
    <div>
      <button
        onClick={onclickfunc}
        type='submit'
        className=' border-2 border-cornflower-400 mb-3 text-cornflower-50 text-lg rounded-2xl mt-5 px-9 py-1 bg-gradient-to-t from-cornflower-600 to-cornflower-800 hover:from-cornflower-00 hover:to-cornflower-600'
      >
        {icon ? (
          <div className='flex justify-center items-center'>
            <span>{label}</span> <span>{icon}</span>
          </div>
        ) : (
          <span>{label}</span>
        )}
      </button>
    </div>
  );
};

export default Buttons;
