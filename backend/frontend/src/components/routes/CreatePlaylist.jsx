import React, { useState } from "react";
import { makeAuthenticatedPOSTRequest } from "../../utils/serverHelpers";

const CreatePlaylist = ({ setPopCreatePlaylist }) => {

  const [playlistInputs, setPlaylistInputs] = useState({
    name: "",
    thumbnail: "",
  });

  const handleInnerDivClick = (e) => {
    e.stopPropagation();
  };

  const change = (e) => {
    const { name, value } = e.target;
    setPlaylistInputs({ ...playlistInputs, [name]: value });
  };

  const create = async () => {
    const response = await makeAuthenticatedPOSTRequest("/playlist/create", {
      name: playlistInputs.name,
      thumbnail: playlistInputs.thumbnail,
      songs: [],
    });
    if(response._id){
        setPopCreatePlaylist(false);
    }
  };

  return (
    <div
      className="absolute z-40 flex justify-center items-center bg-black bg-opacity-80 w-screen min-h-screen"
      onClick={() => setPopCreatePlaylist(false)}
    >
      <div
        className="w-1/2 rounded-md border-2 border-pink-800 p-5"
        onClick={handleInnerDivClick}
      >
        <div className="text-2xl font-semibold text-pink-500">
          Create Playlist
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={playlistInputs.name}
          onChange={change}
          className="bg-pink-300 p-3 w-full rounded-md mt-3 focus:outline-none"
        />
        <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail"
          value={playlistInputs.thumbnail}
          onChange={change}
          className="bg-pink-300 p-3 w-full rounded-md mt-2 focus:outline-none"
        />
        <div
          className="bg-pink-800 cursor-pointer p-2 flex justify-center items-center rounded-md border-2 border-pink-400 hover:bg-pink-700 text-white font-semibold w-1/2 mt-3"
          onClick={create}
        >
          Create
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylist;
