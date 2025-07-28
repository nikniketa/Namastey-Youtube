import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessages } from "../utils/chatSlice";

const ChatForm = ({ handleSubmit }) => {
  const [chatInput, setChatInput] = useState();
  const dispatch = useDispatch();
  return (
    <div className="p-2 border flex justify-between">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              id: "c1",
              user: "Niketa Sikarwar",
              message: chatInput,
            })
          );
          setChatInput("");
        }}
      >
        <input
          type="text"
          className="border text-base p-2 text-slate-600"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
        />
        <button
          type="submit"
          className="border bg-green-400 text-base p-2 text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
