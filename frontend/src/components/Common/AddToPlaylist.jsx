import React, { useEffect, useState } from "react";
import { makeAuthenticatedGETRequest } from "../../utils/serverHelpers";

const AddToPlaylist = ({ setPopAddSongToPlaylist, addSong }) => {
  const [myPlaylists, setMyPlaylists] = useState([]);

  // Get my playlists
  useEffect(() => {
    const getdata = async () => {
      const response = await makeAuthenticatedGETRequest(
        "/playlist/get/myplaylists"
      );
      setMyPlaylists(response.data);
      // console.log(response.data);
    };
    getdata();
  }, []);

  const handleInnerDivClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="absolute z-40 flex justify-center items-center bg-black bg-opacity-80 w-screen min-h-screen"
      onClick={() => setPopAddSongToPlaylist(false)}
    >
      <div
        className="w-1/2 rounded-md border-2 border-green-400 p-5"
        onClick={handleInnerDivClick}
      >
        <div className="text-2xl font-semibold text-green-500">
          Select Playlist
        </div>
        <div className="">
          {myPlaylists.map((item) => {
            return <PlaylistListComponent info={item} addSong={addSong} />;
          })}
        </div>
      </div>
    </div>
  );
};

const PlaylistListComponent = ({ info, addSong }) => {
  return (
    <div
      className="p-3 flex items-center cursor-pointer rounded-md hover:bg-green-200 hover:bg-opacity-40"
      onClick={() => addSong(info._id)}
    >
      <div>
        <img src={info.thumbnail} alt="Thumbnail" className="h-12 w-12" />
      </div>
      <div className="text-green-600 font-semibold pl-3">{info.name}</div>
    </div>
  );
};

export default AddToPlaylist;
