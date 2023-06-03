import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// const clientId = import.meta.env.REACT_APP_GOOGLE_API_TOKEN;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId={clientId}> */}
    <Router>
      <App />
    </Router>
    {/* </GoogleOAuthProvider> */}
  </React.StrictMode>
);
