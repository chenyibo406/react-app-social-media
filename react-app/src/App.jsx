import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./container/Home";
import Login from "./components/Login";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

// import "./App.css";

function App() {
  // const clientId =
  //   "192459519410-qurhdt8552j9nuluhq2rmm8li902deu3.apps.googleusercontent.com";
  // console.log(clientId);

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
