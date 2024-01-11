import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useCookies } from "react-cookie";

const Sidebar = ({popup}) => {
  // eslint-disable-next-line
  const [cookie, setCookie] = useCookies(["token"]);

  return (
    <div className="max-h-screen overflow-y-auto fixed">
      {/* logo */}
      <Link to="/home">
        <div className="flex font-semibold">
          <Icon icon="arcticons:musicplayergo" width={30} />
          <h2 className="text-xl mb-4 ml-3">ViBing</h2>
        </div>
      </Link>

      {/* Menu items */}
      <nav>
        <div className="flex flex-col justify-start items-center w-full text-sm ">
          {/* home */}
          <Link to="/" className="flex items-center  w-full" >
            <div
              className="flex mb-2 p-2 w-full rounded-full hover:shadow-[0_8px_7px_rgba(255,_255,_255,_0.3)]"
              
            >
              <Icon icon="bxs:home-smile" fontSize={20} /> &nbsp; Home
            </div>
          </Link>

          {/* search */}
          <Link to="/search" className="flex items-center  w-full">
            <div
              className="flex mb-2 p-2 w-full rounded-full hover:shadow-[0_8px_7px_rgba(255,_255,_255,_0.3)]"
            >
              <Icon icon="tabler:music-search" fontSize={20} />
              &nbsp; Search
            </div>
          </Link>

          {/*  your library */}
          <Link to="/library" className="flex items-center  w-full">
            <div
              className="flex mb-2 p-2 w-full rounded-full hover:shadow-[0_8px_7px_rgba(255,_255,_255,_0.3)]"
            >
              <Icon icon="solar:music-library-bold-duotone" fontSize={20} />
              &nbsp; Your Library
            </div>
          </Link>

          {/* LoogedInRoute */}
          {cookie.token && (
            <Link to="/mymusic" className="flex items-center  w-full">
              <div
                className="flex mb-2 p-2 w-full rounded-full hover:shadow-[0_8px_7px_rgba(255,_255,_255,_0.3)]"
              >
                <Icon
                  icon="arcticons:google-music"
                  color="white"
                  fontSize={20}
                  className="font-bold"
                />
                &nbsp; My Music
              </div>
            </Link>
          )}

          {/* create playlist */}
          <div className="flex items-center cursor-pointer w-full" >
            <div
              className="flex mb-2 p-2 w-full rounded-full hover:shadow-[0_8px_7px_rgba(255,_255,_255,_0.3)]"
              onClick={popup}
            >
              <Icon icon="fluent:add-20-regular" fontSize={20} />
              &nbsp; Create Playlist
            </div>
          </div>

          {/* liked songs */}
          <Link to="/liked/songs" className="flex items-center  w-full">
            <div
              className="flex mb-2 p-2 w-full rounded-full hover:shadow-[0_8px_7px_rgba(255,_255,_255,_0.3)]  "
            >
              <Icon icon="tabler:music-heart" fontSize={20} />
              &nbsp; Liked Songs
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
