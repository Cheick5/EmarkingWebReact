import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faComment,
  faCheck,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import AddEditModal from "../AddEdit/EditModal.jsx";
import "../Styles/styles_photos.css";
import { updatePin } from "../Body/Functions.jsx";
import { useContext } from "react";
import { Context } from "../Body/Body.jsx";
import CommentToolTip from "../ToolTip/CommentToolTip.jsx";

const Pins = ({
  idDiv,
  comment,
  show,
  setShow,
  setShowEditComment,
  setPin,
  photoId,
  setPhotoId,
}) => {
  const [hover, setHover] = useState("");
  const [showToolTip, setShowToolTip] = useState(false);
  const [oldPos, setOldPos] = useState({ x: 0, y: 0 });
  const [newPos, setNewPos] = useState({ x: 0, y: 0 });

  const { setSubmission, setAllTabs, ping } = useContext(Context);

  const handleMouseOver = (e, object) => {
    // Function to check if an element or any of its ancestors has the classname "InvisDiv"
    const hasInvisDivParent = (element) => {
      while (element) {
        if (element.classList && element.classList.contains("InvisDiv")) {
          return true;
        }
        element = element.parentElement;
      }
      return false;
    };

    // Check if the target element or its parents have the classname "InvisDiv"
    if (!hasInvisDivParent(e.target)) {
      // Change cursor and border style if neither the target nor its parents have "InvisDiv"
      e.target.style.cursor = "all-scroll";
      e.target.style.border = "2px dotted black";
    }

    const divs = document.getElementsByClassName("criterion_wrapper");
    for (let i = 0; i < divs.length; i++) {
      if (divs[i].id == comment.criterionid) {
        divs[i].style.backgroundColor = "orange";
      }
    }

    setPin(comment);
    setPhotoId(photoId);
    setHover(e.target.id);

    if (
      comment.criterionid != 2 &&
      !window.matchMedia("(max-width: 768px)").matches
    ) {
      setShowToolTip(true);
    }
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
    // setShowToolTip(false);
  };

  const handleMouseClick = (e, object) => {
    // setShow(true);
    console.log("click");
    // console.log(comment)
  };
  const handleDragStart = (e, object) => {
    setShowToolTip(false);
    setOldPos({ x: e.clientX, y: e.clientY });
  };
  const handleDrag = (e, object) => {
    // console.log("drag");
    // console.log(e);
  };
  const handleDragStop = (e, object) => {
    const newX = Math.max(
      20,
      Math.min((window.innerWidth / 10) * 6, e.clientX)
    );
    const newY = Math.max(
      90,
      Math.min((window.innerWidth / 10) * 8, e.clientY)
    );

    const diffX = newX - oldPos.x; //Positivo -> derecha, negativo -> izquierda
    const diffY = newY - oldPos.y; //Positivo -> abajo, negativo -> arriba

    if (Math.abs(diffX) < 20 && Math.abs(diffY) < 20) {
      if (ping.data.values.readonly == false) {
        if (comment.format == 2) {
          console.log("Hola1");
          setShow(true);
        } else {
          console.log("Hola2");
          setShowEditComment(true);
        }
      } else {
        // If the user only can read, we display the recorrection modal
        console.log("Hola3");
      }
    } else {
      //TODO: Set the diference in positions insteead of getting the pos
      console.log("Hola4");
      setNewPos({
        x: comment.posx * ((window.innerWidth / 10) * 6) + diffX,
        y: comment.posy * ((window.innerWidth / 10) * 8) + diffY,
      });

      comment.posx =
        parseFloat(comment.posx) +
        parseFloat(diffX / parseFloat((window.innerWidth / 10) * 6));
      comment.posy =
        parseFloat(comment.posy) +
        parseFloat(diffY / parseFloat((window.innerWidth / 10) * 8));

      // console.log("commtn posx: " + comment.posx + " comment posy: " + comment.posy);
      comment.width = comment.width + diffX;
      comment.height = comment.height + diffY;

      updatePin(
        comment,
        comment.levelid,
        comment.rawtext,
        comment.bonus,
        setAllTabs,
        setSubmission
      );
    }
  };
  const switchIconsFormat = (format) => {
    switch (format) {
      case "1":
        return faComment;
      case "2":
        return faMapMarkerAlt;
      case "3":
        return faCheck;
      case "4":
        return faRemove;
    }
  };

  return (
    <div className="PinAndToolTipContainer">
      {/* // <div style={{ height: "100%", */}
      {/* //   position: "absolute", */}
      {/* //   width: "100%"}}> */}
      <Draggable
        bounds="parent"
        onStart={(e) => handleDragStart(e, comment)}
        onDrag={(e) => handleDrag(e, comment)}
        onStop={(e) => handleDragStop(e, comment)}
        position={{ x: 0, y: 0 }}
      >
        <div
          id={idDiv}
          className="pins"
          style={{
            left: `${comment.posx * 100}%`,
            top: `${comment.posy * 100}%`,
          }}
          onMouseOver={(e) => handleMouseOver(e, comment)}
          onMouseOutCapture={(e) => handleMouseOut(e, comment.criterionid)}
          // onClick={(e) => handleMouseClick(e, comment)}
        >
          <div style={{ pointerEvents: "none" }}>
            <FontAwesomeIcon
              icon={switchIconsFormat(comment.format)}
              style={{ color: "red" }}
            />
          </div>
        </div>
      </Draggable>
      <CommentToolTip
        comment={comment.rawtext}
        author={comment.markername}
        posx={comment.posx}
        posy={comment.posy}
        pageno={comment.pageno}
        show={showToolTip}
        setShowToolTip={setShowToolTip}
      />
    </div>
  );
};

export default Pins;
