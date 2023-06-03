import React from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
// import { useGoogleLogin } from "@react-oauth/google";

import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import bgVideo from "../assets/background.mp4";
import logo from "../assets/ac-logo.png";

import { client } from "../client";

import axios from "axios";

const Login = () => {
  // const clientId = import.meta.env.REACT_APP_GOOGLE_API_TOKEN;
  const navigate = useNavigate();

  // console.log(import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID);
  // console.log(import.meta.env.VITE_REACT_APP_SANITY_TOKEN);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // console.log(tokenResponse);

      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => res.data);

      // console.log(userInfo);
      localStorage.setItem("user", JSON.stringify(userInfo));
      const { sub, name, picture } = userInfo;
      const doc = {
        _id: sub,
        _type: "user",
        userName: name,
        image: picture,
      };

      client
        .createIfNotExists(doc)
        .then(() => navigate("/"), { replace: true });
    },
  });

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={bgVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            {/* <GoogleOAuthProvider clientId={clientId}> */}
            <button
              type="button"
              className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
              onClick={() => login()}
            >
              <FcGoogle className="mr-4" /> Sign in with google
            </button>
            {/* </GoogleOAuthProvider> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
