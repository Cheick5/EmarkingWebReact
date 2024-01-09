// import React from "react";
import "./styles_rubric.css";
import Level from "./level";
import GeneralFeedback from "./General_feedback";
import Resumen from "./Resumen";

const Rubric = () => {
  return (
    <div className="rubric">
      <div className="imported_rubric">Imported rubric</div>
      <Level numberOfDivs={3} />
      <Level numberOfDivs={3} />
      <Level numberOfDivs={3} />
      <GeneralFeedback />
      <Resumen />
    </div>
  );
};

export default Rubric;
