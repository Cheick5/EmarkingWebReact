import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import Botones from "./display/Buttons.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import Rubric from "./display/Rubric.jsx";
// import Photos from "./display/Photos.jsx";
import Body from "./display/Body.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Botones />
    <Body />
  </React.StrictMode>
);
