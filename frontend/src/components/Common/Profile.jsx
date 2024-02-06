import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useCookies } from "react-cookie";

const Profile = () => {
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  // eslint-disable-next-line
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);

  const toggleProfilePopup = () => {
    setShowProfilePopup(!showProfilePopup);
  };

  const handleInnerDivClick = (e) => {
    e.stopPropagation();
  };
  
const logout = () =>{
  removeCookie("token");
  toggleProfilePopup()
}

  return (
    <div className="relative">
      {/* Profile */}
      <button
        className=" px-2 rounded-full text-white bg-black border border-white
             hover:bg-gray-900 hover:border-green-400 mx-3"
        onClick={toggleProfilePopup}
      >
        <Icon
          icon="iconamoon:music-artist-duotone"
          color="#a6fd29"
          fontSize={30}
        />
      </button>

      {/* Show Profile Popup */}
      {showProfilePopup && (
        <div className="absolute top-10 right-5 z-50 w-[200px] flex items-center justify-start" onClick={toggleProfilePopup}>
          <div
            className="bg-gradient-to-b from-blue-300 to-red-200 p-4 space-y-2 w-full flex flex-col justify-between rounded-lg shadow-[inset_-12px_-8px_40px_#46464620]"
            onClick={handleInnerDivClick}
          >

            {/* popup buttons */}
            <div className="text-md font-semibold hover:font-bold">Account</div>
            <div className="text-md font-semibold hover:font-bold">Settings</div>
            <div className="text-md font-semibold hover:font-bold">Help</div>
            <div className="border-t border-black">
            <button className="w-full h-12 mt-3 text-white p-1 rounded-full bg-gradient-to-r from-gray-500 to-gray-900 hover:bg-gradient-to-l" onClick={logout}>
              LogOut
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
