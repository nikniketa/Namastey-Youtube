import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="m-2 shadow-md w-72">
      <img src={thumbnails.medium.url} alt="title" className="rounded-lg" />
      <div className="p-2">
        <h1 className="text-base font-medium">{title}</h1>
        <h2 className="text-sm text-slate-500">{channelTitle}</h2>
        <p className="text-sm text-slate-500">{viewCount}</p>
      </div>
    </div>
  );
};

export default VideoCard;
