import img from "../../assets/194001-190000-1.jpg";

import "../Styles/styles_photos.css";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "./Body.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import AddEditModal from "../AddEdit/AddEditModal.jsx";
import Pins from "./Pins.jsx";

const Photos = () => {
  const {allTabs} = useContext(Context);
  const [show, setShow] = useState(false);
  const [pin, setPin] = useState(null);
  const [photoId, setPhotoId] = useState(null);

  if(allTabs === null){
    return <p>AllTabs is null</p>
  }

  return (
    <div className="photos">
      <AddEditModal
        show={show}
        setShow={setShow}
        pin={pin}
        setPin={setPin}
        photoId={photoId}
      />
      {/* Hovered one: {hover} */}
      {Object.keys(allTabs.data.values).map((object, index) => (
        <div className="photo" key={index}>
          <img id={index+1} key={index} draggable="false" src={allTabs.data.values[object].url} />
          {/* The request to addmarks uses the index starting from 1, so we are going to just add 1 to this id */}
          {Object.keys(allTabs.data.values[object].comments).map(
            (object2, index2) => (
              <Pins
                idDiv={index + "-" + index2}
                key={object2}
                comment={allTabs.data.values[object].comments[index2]}
                setPin={setPin}
                show={show}
                setShow={setShow}
                photoId={parseInt(allTabs.data.values[object].id)}
                setPhotoId={setPhotoId}
              />
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Photos;
