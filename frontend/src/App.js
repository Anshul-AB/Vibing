import "./App.css";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
// Routes
import Home from "./components/routes/Home";
import Login from "./components/routes/Login";
import SignUp from "./components/routes/SignUp";
import LoggedInHome from "./components/routes/LoggedInHome";
import UploadSong from "./components/routes/UploadSong";
import MyMusic from "./components/routes/MyMusic";
import songContext from "./contexts/SongContext";
import Search from "./components/routes/Search";
import Library from "./components/routes/Library";
import SinglePlaylist from "./components/routes/SinglePlaylist";

function App() {
  // eslint-disable-next-line
  const [cookie, setCookie] = useCookies(["token"]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [soundPlayed, setSoundPlayed] = useState(null);

  return (
    <div className="w-screen h-screen font-poppins box-border">
      <BrowserRouter>
        {cookie.token ? (
          // loggedIn routes
          <songContext.Provider
            value={{
              currentSong,
              setCurrentSong,
              isPaused,
              setIsPaused,
              soundPlayed,
              setSoundPlayed,
            }}
          >
            <Routes>
              <Route path="/home" exact element={<LoggedInHome />} />
              <Route path="/search" exact element={<Search />} />
              <Route path="/uploadSong" element={<UploadSong />} />
              <Route path="/library" element={<Library />} />
              <Route path="/playlist/:playlistId" element={<SinglePlaylist />} />
              <Route path="/mymusic" element={<MyMusic />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/profile" element={<Profile />} /> */}
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </songContext.Provider>
        ) : (
          // loggedOut routes
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
