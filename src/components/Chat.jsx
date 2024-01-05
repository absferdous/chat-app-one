import React, { useState, useEffect } from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
import { HiMiniChatBubbleOvalLeftEllipsis } from "react-icons/hi2";

import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";

const Chat = ({ room }) => {
  const [newMessage, setnewMessage] = useState("");
  const [messages, setmessages] = useState([]);
  const messageRef = collection(db, "messages");

  useEffect(() => {
    const queryMessage = query(
      messageRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryMessage, snapshot => {
      let messages = [];
      snapshot.forEach(doc => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setmessages(messages);
    });
    return () => unsuscribe();
  }, []);

  const handlesubmit = async e => {
    e.preventDefault();
    if (!auth.currentUser || newMessage === "") return;
    await addDoc(messageRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName || "Anonymous",
      image: auth.currentUser.photoURL || null,
      room,
    });
    setnewMessage("");
  };
  return (
    <div>
      {messages.map(message => (
        <div key={message.id} className=' mb-8 '>
          <p className='flex-col flex max-sm:justify-around justify-center items-baseline'>
            <span className=' font-serif font-medium mt-1'>{message.user}</span>

            <span className=' border-y-2 border-zinc-400 bg-neutral-100 m-3 px-8 rounded-3xl py-3 font-semibold shadow-2xl'>
              {message.text}
            </span>
          </p>
        </div>
      ))}

      <form onSubmit={handlesubmit}>
        <div className=' bg-neutral-100 px-4 mt-3 mb-3  flex justify-between  items-center sticky bottom-0 w-full '>
          <input
            placeholder='type your message here..............'
            className=' bg-neutral-20 px-3 py-1 mx-3 mt-5  rounded w-full border-2 border-black text-white'
            value={newMessage}
            type='text'
            onChange={e => setnewMessage(e.target.value)}
          />
          <button
            className='  rounded-lg hover:bg-white hover:text-black px-3 py-2 mt-4 border-2 border-black bg-neutral-800 text-white'
            type='submit'
          >
            <HiChevronDoubleRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
