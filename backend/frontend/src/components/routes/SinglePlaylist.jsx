import React, { useEffect, useState } from "react";
import LoggedInContainer from "../../Container/LoggedInContainer";
import { makeAuthenticatedGETRequest } from "../../utils/serverHelpers";
import { useParams } from "react-router-dom";
import MyMusicCard from "../Common/MyMusicCard";

const SinglePlaylist = () => {
  const { playlistId } = useParams();
  const [playlistDetails, setPlaylistDetails] = useState({})

  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest(
        "/playlist/get/playlist/" + playlistId
      );
      setPlaylistDetails(response)
      console.log(response);
    };
    getData();
    // eslint-disable-next-line
  }, []);

  console.log(playlistDetails.songs);
  return (
    <LoggedInContainer>
      <div className="text-pink-300 text-2xl font-semibold pb-5">
        {playlistDetails.name}
      </div>

      {/* My Music */}
      <div className="p-5 cursor-pointer">
        {playlistDetails.songs && (
        <div>
          {playlistDetails.songs.map((item) => (
            <MyMusicCard
              key={JSON.stringify(item)}
              info={item}
              playSound={() => {}}
            />
          ))}
        </div>

        )}
      </div>
    </LoggedInContainer>
  );
};

export default SinglePlaylist;
