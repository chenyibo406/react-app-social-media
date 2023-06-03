import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./container/Home";
import Login from "./components/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

// import "./App.css";

function App() {
  return (
    <GoogleOAuthProvider clientId="192459519410-qurhdt8552j9nuluhq2rmm8li902deu3.apps.googleusercontent.com">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
