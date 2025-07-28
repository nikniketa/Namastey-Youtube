import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { LIVE_CHAT_DATA } from "../utils/constant";
import ChatForm from "./ChatForm";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * 10);

      dispatch(addMessages(LIVE_CHAT_DATA[index]));
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const onsubmit = (x) => {
    console.log(x);
  };
  return (
    <div className="ml-14 w-1/4">
      <div className="border  rounded-lg  p-5 h-[500px] overflow-scroll flex flex-col-reverse">
        {chatMessages.map((message, index) => (
          <ChatMessage
            name={message.user}
            message={message.message}
            key={index}
          />
        ))}
      </div>
      <ChatForm />
    </div>
  );
};

export default LiveChat;
