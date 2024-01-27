// import React from "react";
import { useEffect, useState } from "react";
import "../../../Styles/styles_level.css";

import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../../Body.jsx";

const Level = ({ criterion }) => {

  const [selected, setSelected] = useState("?");
  const [score, setScore] = useState(0);
  const [rubric, setRubric] = useState({ 1: {}, 2: {} });
  const [submission, setSubmission, allTabs, setAllTabs] = useContext(Context);

  Level.propTypes = {
    criterion: PropTypes.object.isRequired,
  };

  useEffect(() => {
    const levelWithNonZeroMarkerId = Object.values(criterion.levels).find(
      (level) => level.markerid !== 0
    );
    //   console.log('submission');
    // console.log(submission);

    if (levelWithNonZeroMarkerId) {
      setSelected(levelWithNonZeroMarkerId);
      setScore(levelWithNonZeroMarkerId.score);

      Object.keys(criterion.levels).forEach((level) => {
        const divElement = document.getElementById(criterion.levels[level].id);

        if (criterion.levels[level].markerid === 0) {
          divElement.classList.remove("level_selected");
          // console.log("level not selected");
          // console.log(divElement);
          // divElement.style.backgroundColor = "initial"; // Reset style
        } else {
          divElement.classList.add("level_selected");
          // console.log("level selected");
          // console.log(divElement);
          // console.log("id del weno");
          // console.log(criterion.levels[level].id);
          // divElement.style.backgroundColor = "red"; // Add style to selected div
        }
      });
    } else {
      // No level with non-zero markerid found
      console.log("No level with non-zero markerid found");
    }
  }, [criterion]);

  return (
    <div id={criterion.id} className="criterion_wrapper">
      <div className="criterion">
        <div className="criterion_name">{criterion.description}</div>
        <div className="criterion_score">
          {parseInt(score)}/{parseInt(criterion.maxscore)}
        </div>
        <div className="criterion_status"> Por recorregir</div>
        {/* TODO: recorregir se ve en base al comment de recorregir looooool*/}
      </div>
      {Object.keys(criterion.levels).map((level, index) => (
        // <div key={index} className="level">
        <div
          id = {criterion.levels[level].id}
          key={index}
          className={
            criterion.levels[level].markerid == 0
              ? "level"
              : "level"
          }
        >
          {
            <div className="level_name">
              {criterion.levels[level].description.replace(/<[^>]+>/g, "")}
            </div>
          }
          <div className="level_score">
            {parseInt(criterion.levels[level].score)} pts
          </div>
        </div>
      ))}
    </div>
  );
};

export default Level;
