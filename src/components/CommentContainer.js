import React from "react";
import { CHAT_DATA } from "../utils/constant";
const Comment = ({ data }) => {
  return (
    <div className="flex bg-slate-100 p-2">
      <img
        alt="profile-photo"
        className="w-6 h-6 m-2"
        src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
      />
      <div className="ml-3">
        <h2 className="text-sm font-medium">{data.user}</h2>
        <p className="text-sm">{data.message}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment data={comment} />
          <div className="ml-4 ">
            <CommentsList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};
const CommentContainer = () => {
  return (
    <div className="mt-5">
      <h1 className="text-lg font-medium">Comments:</h1>
      <CommentsList comments={CHAT_DATA} />
    </div>
  );
};

export default CommentContainer;
