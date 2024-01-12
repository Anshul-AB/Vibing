import React from "react";
import Sidebar from "../Common/Sidebar";
import Navbar from "../Common/Navbar";
import Playlist from "../Common/Playlist";
const cardsData = require('../../Api/api');

const Home = () => {
  return (
    <div >
      <div className="min-h-screen w-screen grid grid-cols-6">
        {/* left */}
        <div className="bg-black text-white col-span-1 top-0 p-2">
          <Sidebar />
        </div>

        {/* right */}
        <div className="col-span-5 overflow-y-auto bg-gradient-to-b from-black to-gray-800">
          {/* top */}
          <div className="h-1/10 p-3">
            <Navbar />
          </div>

          {/* main */}
          <div className="flex flex-col ">
            <Playlist titlePlaylist='focus' cardsData={cardsData.focusCardsData}/>
            <Playlist titlePlaylist='spotify' cardsData={cardsData.spotifyPlaylistsCardData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
