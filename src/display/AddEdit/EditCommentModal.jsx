import React from "react";
// import Modal from "react-modal";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useContext } from "react";
import "../Styles/styles_modal.css";
import { Context } from "../Body/Body.jsx";
import axios from "axios";
import { updatePin } from "../Body/Functions.jsx";

// This component is the same as AddModal, but it has changes in the requests and in the parameters.
// This is called when the user clicks on a pin in the photo.
// AddModal is called when the user clicks on the photo.

const EditCommentModal = ({ show, setShow, pin, add }) => {
  // Your component logic goes here

  const { submission, setAllTabs, setSubmission } = useContext(Context);
  const [newLevel, setNewLevel] = useState(null);
  const [comment, setComment] = useState("");
  const [bonus, setBonus] = useState("+0");

  const handleClose = () => {
    setShow(false);
  };

  const urlParams = new URLSearchParams(window.location.search);
  const ids = urlParams.get("id");

  const handleSave = () => {
    updatePin(pin, newLevel, comment, bonus, setAllTabs, setSubmission);
    setShow(false);
  };

  if (pin == null) {
    return <div></div>;
  }

  return (
    // Your JSX code goes here
    <Modal animation={true} show={show} onHide={handleClose}>
      <Modal.Header className="AddEditHeader">
        <div>Editar comentario</div>
        <div>{pin == null ? "" : pin.criteriondesc}</div>
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

export default EditCommentModal;
