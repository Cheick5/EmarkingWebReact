import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import AddEditModal from "../AddEdit/AddEditModal.jsx";
import "../Styles/styles_photos.css";
import { updatePin } from "../Body/Functions.jsx"
import { useContext } from "react";
import { Context } from "../Body/Body.jsx";

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
  const [oldPos, setOldPos] = useState({x: 0, y: 0});
  const [newPos, setNewPos] = useState({x: 0, y: 0});
  const [submission, setSubmission, allTabs, setAllTabs] = useContext(Context);

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
    // setShow(true);
    console.log('click');
  };
  const handleDragStart = (e, object) => {
    setOldPos({x: e.clientX, y: e.clientY});
  };
  const handleDrag = (e, object) => {
    // console.log("drag");
    // console.log(e);
  };
  const handleDragStop = (e, object) => {
    const newX = Math.max(20, Math.min(window.innerWidth/10*6 , e.clientX));
    const newY = Math.max(90, Math.min(window.innerWidth/10*8 , e.clientY));

    const diffX = newX - oldPos.x; //Positivo -> derecha, negativo -> izquierda
    const diffY = newY - oldPos.y; //Positivo -> abajo, negativo -> arriba

    // console.log("diffX: "+diffX+"  diffY: "+diffY);

    if (Math.abs(diffX) <20 && Math.abs(diffY) <20) {
      setShow(true);
    }
    else{
    
      //TODO: Set the diference in positions insteead of getting the pos
      setNewPos({ x: comment.posx * ((window.innerWidth / 10) * 6) + diffX, y: comment.posy * ((window.innerWidth / 10) * 8) + diffY});

      // console.log('poss x new');
      // console.log( comment.posx * ((window.innerWidth / 10) * 6) + diffX);
      // console.log('poss y new');
      // console.log( comment.posy * ((window.innerWidth / 10) * 8) + diffY);

      // console.log("pinposx");
      // console.log(comment.posx * ((window.innerWidth / 10) * 6));
      // console.log("newX: " + newX + "newY: " + newY);
      // console.log("newX / lol: " + newX/((window.innerWidth / 10) * 6) + " newY / lol: " + newY/((window.innerWidth / 10) * 8));

      // console.log("sumando1");
      // console.log(comment.posx);
      // console.log("sumando2");
      // console.log(parseFloat(diffX / parseFloat((window.innerWidth / 10) * 6)));

      comment.posx =   parseFloat(comment.posx) +  parseFloat(diffX / parseFloat((window.innerWidth / 10) * 6))  ;
      comment.posy =  parseFloat(comment.posy) +  parseFloat(diffY / parseFloat((window.innerWidth / 10) * 8))  ;




      // console.log("commtn posx: " + comment.posx + " comment posy: " + comment.posy);
      comment.width = comment.width + diffX;
      comment.height = comment.height + diffY;


      updatePin(comment,comment.levelid,comment.rawtext,comment.bonus,setAllTabs,setSubmission)
    }

  };

  return (
    <Draggable
    bounds = "parent"
    onStart={(e) => handleDragStart(e, comment)}
    onDrag={(e) => handleDrag(e, comment)}
    onStop={(e) => handleDragStop(e, comment)}
    position={{ x: 0, y: 0 }}>
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
          <FontAwesomeIcon icon={faMapMarkerAlt}  style={{color: "red",}} />
        </div>
      </div>
    </Draggable>
  );
};

export default Pins;
