// import React from "react";
import { useState } from "react";
import "./styles_level.css";

import PropTypes from "prop-types";

const Criterion = ({ numberOfDivs }) => {
  const [selected, setSelected] = useState("");

  Criterion.propTypes = {
    numberOfDivs: PropTypes.number.isRequired,
  };

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
