import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-slate-200 rounded-lg p-2 px-3 my-3 mx-1 text-sm font-medium">
      {name}
    </button>
  );
};

export default Button;
