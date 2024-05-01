import React from "react";
// import Modal from "react-modal";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useContext } from "react";
import "../Styles/styles_modal.css";
import { Context } from "../Body/Body.jsx";
import axios from "axios";
import { getJson, updateApp } from "../Body/Functions.jsx";
import { newComment } from "../Body/Functions.jsx";

// This component is called after AddMarkModal.
// It's the same as EditModal, but it has changes in the requests and in the parameters.
// This decision was made to facilitate the understanding of the code.
// If it where to be in the same file, there would be a lot of conditions and nulls to check.
// This is called when the user clicks on the photo.
// EditModal is called when the user clicks on a pin in the photo.

const AddCommentModal = ({
  showCommentAdd,
  setShowCommentAdd,
  levelSelected,
  criterionId,
  infoToAdd,
  format,
}) => {
  // Your component logic goes here

  const { submission, setAllTabs, allTabs, setSubmission } =
    useContext(Context);
  const [newLevel, setNewLevel] = useState(null);
  const [comment, setComment] = useState("");
  const [bonus, setBonus] = useState("+0");

  const handleClose = () => {
    setShowCommentAdd(false);
  };

  const urlParams = new URLSearchParams(window.location.search);
  const ids = urlParams.get("id");

  const handleSave = () => {
    // console.log("infoToAdd");
    // console.log(infoToAdd);
    // console.log("levelSelected");
    // console.log(levelSelected);
    // console.log("format");
    // console.log(format);
    // console.log("comment");
    // console.log(comment);
    // console.log("setAllTabs");
    // console.log(allTabs);
    // console.log("setSubmission");
    // console.log(submission);
    // updatePin(pin, newLevel, comment, bonus, setAllTabs, setSubmission);
    newComment(
      infoToAdd,
      // levelSelected.id,
      format,
      comment,
      setAllTabs,
      setSubmission
    );
    setShowCommentAdd(false);
  };

  // if (criterionId == null) {
  //   return <div></div>;
  // } //TODO: que

  return (
    // Your JSX code goes here
    <Modal animation={true} show={showCommentAdd} onHide={handleClose}>
      <Modal.Header className="AddEditHeader">
        <div>Agregar comentario</div>
      </Modal.Header>
      <Modal.Body className="AddEditBody">
        <div className="AddEditBodyRows">
          Comentario
          <textarea
            placeholder="Escribe aquí tu retroalimentación general"
            name="height"
            className="WidthRight"
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={() => handleSave()}>
          {/* 203 is the id of the placeholder submission */}
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCommentModal;
