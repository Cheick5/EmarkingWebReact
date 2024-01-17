import img from "../../assets/194001-190000-1.jpg";

import "../Styles/styles_photos.css";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "./Body.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

const Photos = () => {
  const [submission, setSubmission, allTabs, setAllTabs] = useContext(Context);
  const [hover, setHover] = useState("");
  // console.log("alltabs");
  // console.log(allTabs);

  const handleMouseOver = (e, criterionid) => {
    e.target.style.cursor = "all-scroll"; // Change cursor to pointer
    e.target.style.border = "2px dotted black";
    const divs = document.getElementsByClassName("criterion_wrapper");
    for (let i = 0; i < divs.length; i++) {
      if (divs[i].id == criterionid) {
        divs[i].style.backgroundColor = "orange";
      }
    }

    setHover(e.target.id);
  };

  const handleMouseOut = (e, criterionid) => {
    setHover("");
    e.target.style.border = "none";
    const divs = document.getElementsByClassName("criterion_wrapper");
    for (let i = 0; i < divs.length; i++) {
      if (divs[i].id == criterionid) {
        divs[i].style.backgroundColor = "transparent";
      }
    }

    // console.log("sali");
  };

  return (
    <div className="photos">
      Hovered one: {hover}
      {Object.keys(allTabs.data.values).map((object, index) => (
        <div className="photo" key={index}>
          <img key={index} src={allTabs.data.values[object].url} />
          {Object.keys(allTabs.data.values[object].comments).map(
            (object2, index2) => (
              <div
                id={index + "-" + index2}
                key={object2}
                className="pins"
                style={{
                  left: `${
                    allTabs.data.values[object].comments[index2].posx * 100
                  }%`,
                  top: `${
                    allTabs.data.values[object].comments[index2].posy * 100
                  }%`,
                }}
                onMouseOver={(e) =>
                  handleMouseOver(
                    e,
                    allTabs.data.values[object].comments[index2].criterionid
                  )
                }
                onMouseOutCapture={(e) =>
                  handleMouseOut(
                    e,
                    allTabs.data.values[object].comments[index2].criterionid
                  )
                }
              >
                {console.log(allTabs.data.values[object].comments[index2])}
                <div style={{ pointerEvents: "none" }}>
                  <FontAwesomeIcon icon={faMapMarker} />
                </div>
              </div>
            )
          )}
        </div>
      ))}
      {/* <img src="http://localhost/pluginfile.php/138125/mod_emarking/pages/12/42286-2316-1.png?r=qMxxNl8KJcDw8rG" /> */}
    </div>
  );
};

export default Photos;
