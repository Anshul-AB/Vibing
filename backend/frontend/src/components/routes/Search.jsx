import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { makeAuthenticatedGETRequest } from "../../utils/serverHelpers";
import MyMusicCard from "../Common/MyMusicCard";
import LoggedInContainer from "../../Container/LoggedInContainer";

const Search = () => {
  const [isInputFocussed, setIsInputFocussed] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [songData, setSongData] = useState([]);

  const searchSong = async () => {
    const response = await makeAuthenticatedGETRequest(
      "/song/get/songname/" + searchInput
    );
    setSongData(response.data);
  };

  return (
    <LoggedInContainer>
      {/* Main  */}
        {/* Search Bar */}
        <div className="h-1/10 p-3 mt-3 shadow-2xl w-full">
            <div
              className={`w-1/2 pl-3 flex justify-start items-center bg-gray-700 rounded-full ${
                isInputFocussed ? "border-2 border-white" : ""
              }`}
            >
              <div>
                <Icon
                  icon="lets-icons:search-duotone"
                  className="text-white font-bold"
                  fontSize={40}
                />
              </div>
              <input
                type="text"
                placeholder="What do you want to listen ?"
                className="p-4 bg-gray-700 rounded-full w-full focus:outline-none"
                onFocus={() => setIsInputFocussed(true)}
                onBlur={() => setIsInputFocussed(false)}
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    searchSong();
                  }
                }}
              />
            </div>
          </div>

          {/* Search UI */}
          {songData.length > 0 && searchInput.trim() !== '' ? (
            <div className="text-gray-400 text-xl mt-5">
              Showing results for : 
              <b className="text-gray-400">{" "}{searchInput}</b>
          {/* songData list  */}
          <div className="space-y-4 mt-5">
            {songData.map((item) => {
              return (
                <MyMusicCard
                  info={item}
                  key={JSON.stringify(item)}
                  playSound={() => {}}
                />
              );
            })}
          </div>
            </div>
          ) : (
            <div className="text-gray-400 text-xl mt-5 mb-5">
              No Result Found for :
              <b>{" "}{searchInput}</b>
            </div>
          )}
    </LoggedInContainer>
  );
};

export default Search;
