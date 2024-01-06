import React, { useRef, useEffect } from "react";

const Message = ({ messages }) => {
  const messageref = useRef(null);

  useEffect(() => {
    if (messageref.current) {
      messageref.current.scrollIntoView({
        behaviour: "auto",
      });
    }
  }, [messages]);

  return (
    <div
      className=' bg-gradient-to-tr
     from-cornflower-400 to-cornflower-100 mx-2 
     max-h-screen overflow-auto 
      relative bottom-16  mt-12 py-4 px-2'
    >
      {messages.map(message => (
        <div ref={messageref} key={message.id} className='  mb-50'>
          <p className=' font-serif font-medium '>{message.user}</p>

          <p className=' border-cornflower-900 border-2  rounded-full px-8 py-3 '>
            {message.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Message;
