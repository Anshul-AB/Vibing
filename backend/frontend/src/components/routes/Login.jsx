import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Input from "../Common/Input";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../../utils/serverHelpers";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  // Submit
  const submit = async () => {
    try {
      const data = { email, password };
      const response = await makeUnauthenticatedPOSTRequest(
        "/auth/login",
        data
      );
      if (response && !response.error) {
        // get token
        const token = response.token;
        // console.log(response);

        // store token in a cookie
        const date = new Date();
        date.setDate(date.getDate() + 30);
        setCookie("token", token, { path: "/", expires: date });

        toast.success("Successfully Logged In");
        navigate("/");
      } else {
        toast.error("Failed to Login");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An unexpected error occurred during login");
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-300 to-red-200 min-h-screen">
      <ToastContainer />
      <div
        className="w-full flex items-center justify-center font-bold p-5 border-b border-s-black-200 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <Icon icon="arcticons:musicplayergo" width={60} />
        <span className="w-3 text-3xl">ViBing</span>
      </div>

      {/* LOGIN FORM */}

      <div className="h-full w-full mt-3 flex items-center justify-center">
        <div className=" w-1/3">
          <h2 className="text-3xl font-semibold mb-6">Login</h2>

            {/*  inputs  */}
          <form>
            <Input
              label="Email ID or username"
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

            {/*  Submit button  */}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="w-2/3 main-btn"
                onClick={(e) => {
                  e.preventDefault();
                  submit();
                }}
              >
                Login
              </button>
            </div>
          </form>

          <div className="border-t border-gray-500 my-6 flex items-center justify-center">
            <p className="p-4 font-semibold">Don't have an account?</p>
          </div>

          {/* SIGN UP BUTTON */}
          <Link to="/signup">
            <button className="w-full h-12 text-white p-2 rounded-full bg-gradient-to-r from-gray-500 to-gray-900 hover:bg-gradient-to-l ">
              SignUp for Vibing
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
