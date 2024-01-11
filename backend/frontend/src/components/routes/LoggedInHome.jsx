import React from "react";
import Playlist from "../Common/Playlist";
import LoggedInContainer from "../../Container/LoggedInContainer";
const cardsData = require("../../Api/api");

const LoggedInHome = () => {
  return (
    <LoggedInContainer>
      {/* main */}
      <div className="flex flex-col ">
        <Playlist titlePlaylist="focus" cardsData={cardsData.focusCardsData} />
        <Playlist
          titlePlaylist="spotify"
          cardsData={cardsData.spotifyPlaylistsCardData}
        />
      </div>

      
    </LoggedInContainer>
  );
};

export default LoggedInHome;
