import React, { useRef, useEffect } from "react";
import { auth } from "../firebase-config";

const Message = ({ messages }) => {
  const messageref = useRef(null);

  useEffect(() => {
    if (messageref.current) {
      messageref.current.scrollIntoView({
        behavior: "auto",
      });
    }
  }, [messages]);

  return (
    <div
      className='bg-gradient-to-tr from-cornflower-400 to-cornflower-100 
    mx-2  overflow-auto min-h-full
     relative
      bottom-16
       mt-12 py-4 px-2'
    >
      {messages.map(message => (
        <div
          key={message.id}
          className={`mb-5 ${
            auth.currentUser.displayName === message.user
              ? "flex justify-end"
              : "flex justify-start"
          }`}
        >
          <div className='max-w-xs'>
            <p className='font-serif font-medium'>{message.user}</p>
            <p
              className={`${
                auth.currentUser.displayName === message.user
                  ? "bg-cornflower-900 text-white justify-end px-8 py-3 rounded-ss-3xl"
                  : " bg-cornflower-100 text-black justify-start border-cornflower-900 border-2 rounded-ss-3xl px-8 py-3"
              }`}
            >
              {message.text}
            </p>
          </div>
        </div>
      ))}
      <div ref={messageref}></div>
    </div>
  );
};

export default Message;
