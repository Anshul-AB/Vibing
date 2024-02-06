import React, { useContext } from "react";
import songContext from "../../contexts/SongContext";

const MyMusicCard = ({ info, playSound }) => {
  // eslint-disable-next-line
  const { currentSong, setCurrentSong } = useContext(songContext);

  return (
    <div
      className="flex hover:bg-gray-500 hover:bg-opacity-20 cursor-pointer rounded-md p-2 border-r-8 border-red-500 mb-2"
      onClick={() => {
        setCurrentSong(info);
        playSound();
        // console.log("clicked");
        // console.log(info);
      }}
    >
      {/* thumbnail */}
      <div
        className="w-20 h-20 bg-cover"
        style={{
          backgroundImage: `url(${info.thumbnail})`,
        }}
      ></div>

      <div className="flex justify-between items-center w-full px-5">
        {/* songname and artist name */}
        <div>
          <div className="text-white text-md hover:text-pink-300 cursor-pointer">
            {info.name}
          </div>
          <div className="text-xs text-gray-400 hover:text-pink-300 cursor-pointer">
            {info.artist.firstName + " " + info.artist.lastName}
          </div>
        </div>
        {/* song duration */}
        <div className="">
          <div className="text-gray-400 text-xs">3:44</div>
        </div>
      </div>
    </div>
  );
};

export default MyMusicCard;
