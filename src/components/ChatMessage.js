import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex p-2">
      <img
        alt="profile-photo"
        className="w-5 h-5"
        src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
      />
      <h2 className="text-sm font-medium ml-4">{name}</h2>
      <p className="text-sm ml-2">{message}</p>
    </div>
  );
};

export default ChatMessage;
