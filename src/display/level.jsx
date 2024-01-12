// import React from "react";
import { useState } from "react";
import "./styles_level.css";

import PropTypes from "prop-types";

const Criterion = ({ criterion }) => {
  const [selected, setSelected] = useState("");
  const [rubric, setRubric] = useState({ 1: {}, 2: {} });

  Criterion.propTypes = {
    criterion: PropTypes.object.isRequired,
  };

  console.log("criterion");
  console.log(criterion);
  console.log(Object.keys(criterion.levels));
  const numberOfDivs = Object.keys(criterion.levels).length;
  const renderDivs = (numberOfDivs) => {
    const divs = [];
    for (let i = 0; i < numberOfDivs; i++) {
      const className = i === selected ? "level level_selected" : "level";
      divs.push(
        <div key={i} className={className} onClick={() => setSelected(i)}>
          <div className="level_name">Level {i + 1}</div>
          <div className="level_score">0 pts</div>
        </div>
      );
    }
    return divs;
  };

  return (
    <div className="criterion_wrapper">
      <div className="criterion">
        <div className="criterion_name">Amistad</div>
        <div className="criterion_score">4/4</div>
        <div className="criterion_status"> Por recorregir</div>
      </div>
      {renderDivs(numberOfDivs)}
    </div>
  );
};

export default Criterion;
