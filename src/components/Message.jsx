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
    <div className=' mx-2 max-h-screen overflow-auto relative bottom-16  mt-12'>
      {messages.map(message => (
        <div ref={messageref} key={message.id} className='  mb-50'>
          <p className=' font-serif font-medium '>{message.user}</p>

          <p className='  bg-cornflower-100 border-2 border-cornflower-200 rounded py-3 '>
            {message.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Message;
