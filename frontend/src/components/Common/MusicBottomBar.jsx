import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import songContext from "../../contexts/SongContext";

const MusicBottomBar = ({playSound, pauseSound, popupPlaylists}) => {
  const {
    currentSong,
    // eslint-disable-next-line
    setCurrentSong,
    isPaused,
    setIsPaused,
  } = useContext(songContext);

  // toggle PAUSE PLAY
  const togglePlayPause = () => {
    if (isPaused) {
      playSound();
      setIsPaused(false);
    } else {
      pauseSound();
      setIsPaused(true);
    }
  };

  return (
    <div className="h-10 p-4 w-full flex justify-between bg-opacity-95 bg-black border-t border-red-900 fixed bottom-0 left-0 right-0 rounded-md">
      {/* left */}
      <div className="flex items-center px-3 w-1/6">
        <img
          src={currentSong.thumbnail}
          alt="currentSong img"
          className="h-10 w-10 pr-2"
        />
        <div className="space-y-1">
          <div className="text-red-600 text-sm hover:text-white cursor-pointer">
            {currentSong.name}
          </div>
          <div className="text-red-700 text-xs  hover:text-white cursor-pointer">
            {currentSong.artist.firstName + " " + currentSong.artist.lastName}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center space-x-9 items-center w-2/6 ">
        <Icon
          icon="ph:shuffle-fill"
          fontSize={25}
          className="hover:text-white cursor-pointer text-red-700"
        />
        <Icon
          icon="icon-park-solid:left-c"
          fontSize={25}
          className="hover:text-white cursor-pointer text-red-700"
        />
        <Icon
          icon={isPaused ? "ph:play-bold" : "uil:pause"}
          fontSize={35}
          className="hover:text-white cursor-pointer text-red-700"
          onClick={togglePlayPause}
        />
        <Icon
          icon="icon-park-solid:right-c"
          fontSize={25}
          className="hover:text-white cursor-pointer text-red-700"
        />
        <Icon
          icon="lucide:repeat"
          fontSize={25}
          className="hover:text-white cursor-pointer text-red-700"
        />
      </div>

      {/* right */}
      <div className="flex justify-center space-x-9 items-center w-1/6">
      <Icon
          icon="tabler:playlist-add"
          fontSize={32}
          className="hover:text-white cursor-pointer text-red-700"
          onClick={popupPlaylists}
        />
        <Icon
          icon="ant-design:heart-twotone"
          fontSize={25}
          className="hover:text-white cursor-pointer text-red-700"
        />
      </div>
    </div>
  );
};

export default MusicBottomBar;
