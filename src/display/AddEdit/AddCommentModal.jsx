import React from "react";
// import Modal from "react-modal";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useContext } from "react";
import "../Styles/styles_modal.css";
import { Context } from "../Body/Body.jsx";
import axios from "axios";
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

  return (
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
