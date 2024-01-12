import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Rubric from "./display/Rubric.jsx";
// import Photos from "./display/Photos.jsx";
import Body from "./display/Body.jsx";
import { useState } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}

    <Body />
  </React.StrictMode>
);
