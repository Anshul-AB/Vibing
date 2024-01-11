import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Input from "../Common/Input";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { makeUnauthenticatedPOSTRequest } from "../../utils/serverHelpers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // eslint-disable-next-line
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  // Submit
  const submit = async () => {
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password fields must match. Please check again");
      return;
    }
  
    const data = { email, password, username, firstName, lastName };
    try {
      const response = await makeUnauthenticatedPOSTRequest("/auth/register", data);
  
      if (response && !response.error) {
        // Get token
        const token = response.token;

        // store token in a cookie
        const date = new Date();
        date.setDate(date.getDate() + 30);
        setCookie("token", token, { path: "/", expires: date });
        toast.success("Sign Up Successful");
        navigate("/login");
      } else {
        toast.error("Failed to Sign Up");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error("An unexpected error occurred");
    }
  };
  

  return (
    <div className="bg-gradient-to-b from-blue-300 to-red-200">
      <ToastContainer/>
      <div className="w-full flex items-center justify-center font-bold p-5 mb-5 border-b border-s-black-200">
        <Link to="/" className="flex items-center justify-center">
          <Icon icon="arcticons:musicplayergo" width={60} fontWeight={500}/>
          <span className="w-3 text-3xl">ViBing</span>
        </Link>
      </div>

      {/* LOGIN FORM */}

      <div className="h-full w-full flex items-center justify-center">
        <div className=" w-1/3">
          <h2 className="text-3xl font-semibold mb-6">SignUp</h2>

          <form>
            {/*  inputs  */}
            <Input
              label="firstname"
              type="text"
              value={firstName}
              setValue={setFirstName}
            />
            <Input
              label="lastname"
              type="text"
              value={lastName}
              setValue={setLastName}
            />
            <Input
              label="Username"
              type="text"
              value={username}
              setValue={setUsername}
            />
            <Input
              label="Email ID"
              type="email"
              value={email}
              setValue={setEmail}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              setValue={setPassword}
            />
            <Input
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              setValue={setConfirmPassword}
            />

            {/*  Submit button  */}
            <div className="w-full flex justify-center items-center">
              <Link to="/login" className="w-2/3">
                <button
                  type="button"
                  className="w-full main-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    submit();
                  }}
                >
                  Login
                </button>
              </Link>
            </div>
          </form>

          <div className="border-t border-gray-500 my-6 flex items-center justify-center">
            <p className="pt-4 font-semibold">Already have an account?</p>
          </div>

          {/* SIGN UP BUTTON */}
          <Link to="/login">
            <button className="w-full mb-5 h-12 text-white p-2 rounded-full bg-gradient-to-r from-gray-500 to-gray-900 hover:bg-gradient-to-l ">
              SignIn for Vibing
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
