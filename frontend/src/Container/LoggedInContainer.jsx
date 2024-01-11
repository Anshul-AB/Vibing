import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import Sidebar from "../components/Common/Sidebar";
import Navbar from "../components/Common/Navbar";
import MusicBottomBar from "../components/Common/MusicBottomBar";
import songContext from "../contexts/SongContext";
// eslint-disable-next-line
import { Howl, Howler } from "howler";
import CreatePlaylist from "../components/routes/CreatePlaylist";
import AddToPlaylist from "../components/Common/AddToPlaylist";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";

const LoggedInContainer = ({ children }) => {
  const {
    currentSong,
    // eslint-disable-next-line
    setCurrentSong,
    // eslint-disable-next-line
    isPaused,
    setIsPaused,
    soundPlayed,
    setSoundPlayed,
  } = useContext(songContext);

  const [popCreatePlaylist, setPopCreatePlaylist] = useState(false);
  const [popAddSongToPlaylist, setPopAddSongToPlaylist] = useState(false);

  // To create Playlist
  const popup = () => {
    setPopCreatePlaylist(true);
  };

  //Get my Playlists
  const popupPlaylists = () => {
    setPopAddSongToPlaylist(true);
  };

  // Add song to my playlist
  const addSong = async (playlistId) => {
    const songId = currentSong._id;

    const payload = { playlistId, songId };
    const response = await makeAuthenticatedPOSTRequest(
      "/playlist/add/song",
      payload
    );
    if (response._id) {
      setPopAddSongToPlaylist(false);
    }
  };

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    // the following if statement will prevent the useEffect from running on the first render.
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    changeSong(currentSong.track);
    // eslint-disable-next-line
  }, [currentSong && currentSong.track]);

  // Pause Music
  const pauseSound = () => {
    soundPlayed.pause();
  };

  // Play Music
  const playSound = () => {
    if (!soundPlayed) {
      return;
    }
    soundPlayed.play();
  };

  // Change Music
  const changeSong = (songSrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }
    let sound = new Howl({
      src: [songSrc],
      html5: true,
    });
    setSoundPlayed(sound);
    sound.play();
    setIsPaused(false);
  };

  return (
    <div>
      <div className="min-h-screen w-screen grid grid-cols-6 relative">
        {/* Create Playlist  */}
        {popCreatePlaylist && (
          <CreatePlaylist setPopCreatePlaylist={setPopCreatePlaylist} />
        )}

        {/* Add Song To Playlist */}
        {popAddSongToPlaylist && (
          <AddToPlaylist
            setPopAddSongToPlaylist={setPopAddSongToPlaylist}
            addSong={addSong}
          />
        )}

        {/* Sidebar */}
        <div className="bg-black text-white col-span-1 top-0 p-4">
          <Sidebar popup={popup} />
        </div>

        {/* right */}
        <div className="col-span-5 overflow-y-auto bg-gradient-to-b from-black to-gray-800">
          {/* Navbar */}
          <div className="h-1/10 p-3">
            <Navbar />
          </div>

          {/* main */}
          {children}

          {/* Music bottom */}
          {currentSong && (
            <div>
              <MusicBottomBar
                playSound={playSound}
                pauseSound={pauseSound}
                popupPlaylists={popupPlaylists}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoggedInContainer;
