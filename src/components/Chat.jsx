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
import Message from "./Message";

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
      <Message messages={messages} />
      <form onSubmit={handlesubmit}>
        <div className='  px-4 mt-3 mb-3  flex justify-start  items-center fixed bottom-0 w-full '>
          <input
            placeholder='type your message here..............'
            className='  px-3 py-1 mx-3 mt-5  rounded w-full border-2 border-cornflower-200 '
            value={newMessage}
            type='text'
            onChange={e => setnewMessage(e.target.value)}
          />
          <button
            className='  rounded-lg hover:bg-cornflower-400  bg-cornflower-700 hover:text-black px-3 py-2 mt-4 border-2  border-cornflower-200  text-white'
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
