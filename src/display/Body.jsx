// import React from "react";
import Rubric from "./Rubric.jsx";
import Photos from "./Photos.jsx";
import "./styles_body.css";
import AjaxRequest from "./AjaxRequest.jsx";

const Body = () => {
  return (
    <div className="box">
      <Rubric />
      <Photos />
      <AjaxRequest ids={1935} action="getsubmission" />
    </div>
  );
};

export default Body;
