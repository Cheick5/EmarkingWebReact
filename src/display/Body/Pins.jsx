import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import AddEditModal from "../AddEdit/AddEditModal.jsx";
import "../Styles/styles_photos.css";

const Pins = ({
  idDiv,
  comment,
  show,
  setShow,
  setPin,
  photoId,
  setPhotoId,
}) => {
  const [hover, setHover] = useState("");

  const handleMouseOver = (e, object) => {
    e.target.style.cursor = "all-scroll"; // Change cursor to pointer
    e.target.style.border = "2px dotted black";
    const divs = document.getElementsByClassName("criterion_wrapper");
    for (let i = 0; i < divs.length; i++) {
      if (divs[i].id == comment.criterionid) {
        divs[i].style.backgroundColor = "orange";
      }
    }
    setPin(comment);
    setPhotoId(photoId);
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
  };

  const handleMouseClick = (e, object) => {
    setShow(true);
  };

  return (
    <div
      id={idDiv}
      className="pins"
      style={{
        left: `${comment.posx * 100}%`,
        top: `${comment.posy * 100}%`,
      }}
      onMouseOver={(e) => handleMouseOver(e, comment)}
      onMouseOutCapture={(e) => handleMouseOut(e, comment.criterionid)}
      onClick={(e) => handleMouseClick(e, comment)}
    >
      <div style={{ pointerEvents: "none" }}>
        <FontAwesomeIcon icon={faMapMarker} />
      </div>
    </div>
  );
};

export default Pins;
