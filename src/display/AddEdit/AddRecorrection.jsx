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

const AddRecorrection = ({
  showAddRecorrection,
  setShowAddRecorrection,
  pin,
  setpin,
}) => {
  // Your component logic goes here

  const { submission, setAllTabs, allTabs, setSubmission } =
    useContext(Context);
  const [comment, setComment] = useState("");

  const handleClose = () => {
    setShowAddRecorrection(false);
  };

  const urlParams = new URLSearchParams(window.location.search);
  const ids = urlParams.get("id");

  // const level = pin.levelid;

  const handleSave = () => {
    newComment(
      infoToAdd,
      // levelSelected.id,
      format,
      comment,
      setAllTabs,
      setSubmission
    );
    setShowAddRecorrection(false);
  };

  return (
    <Modal animation={true} show={showAddRecorrection} onHide={handleClose}>
      <Modal.Header className="AddEditHeader">
        <div>Recorrección</div>
      </Modal.Header>
      <Modal.Body className="AddEditBody">
        Motivo
        <select
          className="WidthRight"
          style={{ textAlign: "right" }}
          // defaultValue={levelSelected.id}
          onChange={(e) => setNewLevel(e.target.value)}
        >
          <option value="0">Seleccione</option>
          <option value="1">Asignaron menor puntaje del correspondiente</option>
          <option value="2">No queda claro dónde está el error</option>
          <option value="3">Problemas con el enunciado</option>
          <option value="4">Error de arrastre</option>
          <option value="5">
            Mi respuesta tiene un enfoque distinto al de la pauta, pero de igual
            manera correcto
          </option>
          <option value="10">Otro</option>
        </select>
        <div className="AddEditBodyRows">
          Comentario para corrector
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

export default AddRecorrection;
