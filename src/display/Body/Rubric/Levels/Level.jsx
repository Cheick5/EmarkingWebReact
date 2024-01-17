// import React from "react";
import { useEffect, useState } from "react";
import "../../../Styles/styles_level.css";

import PropTypes from "prop-types";

const Level = ({ criterion }) => {
  const [selected, setSelected] = useState("?");
  const [score, setScore] = useState(0);
  const [rubric, setRubric] = useState({ 1: {}, 2: {} });
  // const [rubricKeys, setRubricKeys] = useState({ 1: {}, 2: {} });

  Level.propTypes = {
    criterion: PropTypes.object.isRequired,
  };

  useEffect(() => {
    const levelWithNonZeroMarkerId = Object.values(criterion.levels).find(
      (level) => level.markerid !== 0
    );

    if (levelWithNonZeroMarkerId) {
      // Level with non-zero markerid foun
      setSelected(levelWithNonZeroMarkerId);
      setScore(levelWithNonZeroMarkerId.score);
      // console.log("Level with non-zero markerid:", levelWithNonZeroMarkerId);
    } else {
      // No level with non-zero markerid found
      console.log("No level with non-zero markerid found");
    }
  }, []);

  // console.log("criterion");
  // console.log(criterion);
  // console.log(Object.keys(criterion.levels));

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
          key={index}
          className={
            criterion.levels[level].markerid == 0
              ? "level"
              : "level level_selected"
          }
        >
          {
            <div
              className="level_name"
              dangerouslySetInnerHTML={{
                __html: criterion.levels[level].description,
              }}
            />
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
