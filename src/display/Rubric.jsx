// import React from "react";
import "./styles_rubric.css";
import Level from "./level";

const Rubric = () => {
  return (
    <div className="rubric">
      <div className="imported_rubric">Imported rubric</div>
      <Level numberOfDivs={3} />
      <Level numberOfDivs={3} />
      <Level numberOfDivs={3} />
    </div>
  );
};

export default Rubric;
