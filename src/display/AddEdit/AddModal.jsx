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
import { newPin } from "../Body/Functions.jsx";

// This component is called after AddMarkModal.
// It's the same as EditModal, but it has changes in the requests and in the parameters.
// This decision was made to facilitate the understanding of the code.
// If it where to be in the same file, there would be a lot of conditions and nulls to check.
// This is called when the user clicks on the photo.
// EditModal is called when the user clicks on a pin in the photo.

const AddModal = ({
  showAdd,
  setShowAdd,
  levelSelected,
  criterionId,
  infoToAdd,
}) => {
  // Your component logic goes here

  const { submission, setAllTabs, setSubmission } = useContext(Context);
  const [newLevel, setNewLevel] = useState(null);
  const [comment, setComment] = useState("");
  const [bonus, setBonus] = useState("+0");

  const handleClose = () => {
    setShowAdd(false);
  };

  const urlParams = new URLSearchParams(window.location.search);
  const ids = urlParams.get("id");

  const handleSave = () => {
    // updatePin(pin, newLevel, comment, bonus, setAllTabs, setSubmission);
    newPin(
      infoToAdd,
      levelSelected.id,
      bonus,
      comment,
      setAllTabs,
      setSubmission
    );
    setShowAdd(false);
  };

  console.log("criterionId");
  console.log(criterionId);
  console.log("submission.data.values.rubric");
  console.log(submission.data.values.rubric);
  console.log("submission.data.values.rubric[criterionId]");
  console.log(submission.data.values.rubric[criterionId]);

  if (criterionId == null) {
    return <div></div>;
  }

  return (
    // Your JSX code goes here
    <Modal animation={true} show={showAdd} onHide={handleClose}>
      <Modal.Header className="AddEditHeader">
        <div>Agregar corrección</div>
      </Modal.Header>
      <Modal.Body className="AddEditBody">
        <div className="AddEditBodyRows">
          Nivel
          <select
            className="WidthRight"
            style={{ textAlign: "right" }}
            defaultValue={levelSelected.id}
            onChange={(e) => setNewLevel(e.target.value)}
          >
            {submission.data.values.rubric[criterionId].levels.map(
              (object, index) => (
                <option key={index} value={object.id}>
                  {object.description.replace(/<[^>]+>/g, "")}
                </option>
              )
            )}
            {/* <option value="1">1</option> */}
          </select>
        </div>
        <div className="AddEditBodyRows">
          Comentario
          <textarea
            placeholder="Escribe aquí tu retroalimentación general"
            name="height"
            className="WidthRight"
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="AddEditBodyRows">
          Ajustar Puntaje
          <input
            className="WidthRight"
            defaultValue="+0"
            // value={bonus}
            style={{ textAlign: "right" }}
            onChange={(e) => setBonus(e.target.value)}
          ></input>
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

export default AddModal;
