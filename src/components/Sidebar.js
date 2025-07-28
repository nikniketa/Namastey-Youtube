import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="grow-1 p-3">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Short</li>
        <li>Subscriptions</li>
      </ul>
    </div>
  );
};

export default Sidebar;
