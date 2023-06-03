import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./container/Home";
import Login from "./components/Login";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { fetchUser } from "./utils/fetchUser";

// import "./App.css";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const User =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    if (!User) navigate("/login");
  }, []);
  return (
    <GoogleOAuthProvider
      clientId={import.meta.env.VITE_REACT_APP_GOOGLE_API_TOKEN}
    >
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
