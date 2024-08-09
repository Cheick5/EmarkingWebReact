import "../Styles/styles_photos.css";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "./Body.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import EditModal from "../AddEdit/EditModal.jsx";
import EditCommentModal from "../AddEdit/EditCommentModal.jsx";
import AddMarkModal from "../AddEdit/AddMarkModal.jsx";
import AddCommentModal from "../AddEdit/AddCommentModal.jsx";
import Pins from "./Pins.jsx";
import { handlePhotoClick } from "./Functions.jsx";
import AddRecorrection from "../AddEdit/AddRecorrection.jsx";

const Photos = () => {
  const { allTabs, activeMarkIcon } = useContext(Context);
  const [showEdit, setShowEdit] = useState(false);
  const [showRecorrectionAdd, setShowRecorrectionAdd] = useState(false);
  const [showEditComment, setShowEditComment] = useState(false);
  const [showAddMark, setShowAddMark] = useState(false);
  const [showCommentAdd, setShowCommentAdd] = useState(false);
  const [infoToAdd, setInfoToAdd] = useState({});
  const [pin, setPin] = useState(null);
  const [photoId, setPhotoId] = useState(null);

  if (allTabs === null) {
    return <p>AllTabs is null</p>;
  }

  return (
    <div className="photos">
      <EditModal
        show={showEdit}
        setShow={setShowEdit}
        pin={pin}
        setPin={setPin}
      />
      <EditCommentModal
        show={showEditComment}
        setShow={setShowEditComment}
        pin={pin}
        setPin={setPin}
      />
      <AddCommentModal
        showCommentAdd={showCommentAdd}
        setShowCommentAdd={setShowCommentAdd}
        infoToAdd={infoToAdd}
        format={activeMarkIcon}
        criterionid={0}
      />
      <AddMarkModal
        showAddMark={showAddMark}
        setShowAddMark={setShowAddMark}
        infoToAdd={infoToAdd}
      />
      <AddRecorrection
        showAddRecorrection = {showRecorrectionAdd}
        setShowAddRecorrection = {setShowRecorrectionAdd}
        pin={pin}
        setPin={setPin}
      
      />

      {/* Hovered one: {hover} */}
      {Object.keys(allTabs.data.values).map((object, index) => (
        <div className="photo" key={index}>
          <img
            id={index + 1}
            key={index}
            draggable="false"
            src={allTabs.data.values[object].url}
            onClick={(e) =>
              handlePhotoClick(
                e,
                setInfoToAdd,
                setShowAddMark,
                setShowCommentAdd,
                activeMarkIcon
              )
            }
          />
          {/* The request to addmarks uses the index starting from 1, so we are going to just add 1 to this id */}
          {Object.keys(allTabs.data.values[object].comments).map(
            (object2, index2) => (
              <Pins
                idDiv={index + "-" + index2}
                key={object2}
                comment={allTabs.data.values[object].comments[index2]}
                setPin={setPin}
                show={showEdit}
                setShowEditComment={setShowEditComment}
                setShow={setShowEdit}
                photoId={parseInt(allTabs.data.values[object].id)}
                setPhotoId={setPhotoId}
                style={{ position: "absolute" }}
              />
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Photos;
