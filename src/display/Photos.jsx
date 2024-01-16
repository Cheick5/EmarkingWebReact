import img from "../assets/194001-190000-1.jpg";

import "./styles_photos.css";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "./Body.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

const Photos = () => {
  const [submission, setSubmission, allTabs, setAllTabs] = useContext(Context);
  console.log("alltabs");
  console.log(allTabs);

  return (
    <div className="photos">
      {Object.keys(allTabs.data.values).map((object, index) => (
        <div key={index}>
          <img key={index} src={allTabs.data.values[object].url} />
          {Object.keys(allTabs.data.values[object].comments).map(
            (object2, index2) => (
              <div
                key={index2}
                className="pins"
                style={{
                  left: `${
                    allTabs.data.values[object].comments[index2].posx * 100
                  }%`,
                  top: `${
                    allTabs.data.values[object].comments[index2].posy * 100
                  }%`,
                }}
              >
                {console.log(allTabs.data.values[object].comments[index2].posx)}
                <FontAwesomeIcon icon={faMapMarker} />
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
