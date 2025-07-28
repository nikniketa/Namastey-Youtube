import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [suggestion, setSuggestion] = useState([]);
  const [showSugg, setShowSugg] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getsearchSuggetion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getsearchSuggetion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json);
    dispatch(
      cacheResult({
        [searchQuery]: json,
      })
    );
    console.log(json);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex h-14 flex-row justify-between w-full py-3 items-center shadow-lg">
      <div className="flex">
        <img
          alt="menu"
          onClick={() => toggleMenuHandler()}
          className="w-6 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        />
        <img
          alt="logo"
          className="w-24 ml-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/800px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="flex border rounded-full px-3 py-2 w-1/2">
        <input
          type="text"
          className="text-base w-11/12"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSugg(true)}
          onBlur={() => setShowSugg(false)}
        />
        <button>
          <img
            alt="search"
            className="w-6 "
            src="https://icons.veryicon.com/png/o/miscellaneous/light-e-treasure-3/search-286.png"
          />
        </button>
        {suggestion[0] !== "undefined" && showSugg && (
          <ul className="absolute bg-white mt-6 p-2 text-sm font-medium w-96">
            {suggestion[1] &&
              suggestion[1].map((x) => (
                <li className="w-full flex py-2 cursor-pointer border-b border-gray-100">
                  <img
                    alt="search"
                    className="w-6"
                    src="https://icons.veryicon.com/png/o/miscellaneous/light-e-treasure-3/search-286.png"
                  />
                  <p>{x}</p>
                </li>
              ))}
          </ul>
        )}
      </div>
      <div className="flex">
        <img
          alt="user"
          className="w-6"
          src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
        />
        Sign in
      </div>
    </div>
  );
};

export default Head;
