import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useCookies } from "react-cookie";
import Profile from "./Profile";

const Navbar = () => {
  // eslint-disable-next-line
  const [cookie, setCookie] = useCookies(["token"]);

  return (
    <div className="flex justify-end items-center mx-3">
      {/* left of the bar */}
      <div>
        <ul className="flex justify-end items-center ">
          <li>
            <NavLink
              to="/premium" // specify the correct path for the Premium link
              className="text-gray-400 font-semibold hover:text-white text-sm mx-3"
            >
              Premium
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support" // specify the correct path for the Premium link
              className="text-gray-400 font-semibold hover:text-white text-sm mx-3"
            >
              Support
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/download" // specify the correct path for the Premium link
              className="text-gray-400 font-semibold hover:text-white text-sm mx-3"
            >
              Download
            </NavLink>
          </li>
        </ul>
      </div>

      {/* the bar */}
      <Icon icon="pepicons-print:line-y" color="white" height="30" />

      {/* Right of the bar */}
      
      {/* Logged In routes */}
      {cookie.token ? (
        <div className="flex items-center">
          <Link to="/uploadSong">
            <button className=" flex items-center text-gray-400 font-semibold hover:text-white text-sm mx-3">
              <Icon icon="flat-color-icons:upload" fontSize={25} />
              &nbsp; Upload Song
            </button>
          </Link>
          <div>
            <Profile />
          </div>
        </div>
      ) : (
        // Logged Out routes
        <div className="flex items-center">
          <Link to="/signup">
            <button className="px-3 rounded-full text-white bg-black border-2 border-white hover:bg-gray-900 mx-3">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="px-3 rounded-full text-white bg-black border-2 border-white hover:bg-gray-900 mx-3">
              Log In
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
