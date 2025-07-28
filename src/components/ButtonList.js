import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Games",
    "Podcast",
    "Baby food",
    "Trailer",
    "Movie",
    "Dance",
    "Music",
    "Games",
    "Podcast",
    "Baby food",
    "Trailer",
    "Movie",
    "Dance",
  ];
  return (
    <div>
      {list.map((x, i) => (
        <Button name={x} key={i} />
      ))}
    </div>
  );
};

export default ButtonList;
