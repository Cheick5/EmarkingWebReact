import React from "react";
// import Modal from "react-modal";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useContext } from "react";
import "../Styles/styles_modal.css";
import { Context } from "../Body/Body.jsx";

const AddEditModal = ({ show, setShow, pin }) => {
  // Your component logic goes here

  const [submission, setSubmission, allTabs, setAllTabs] = useContext(Context);

  const handleClose = () => {
    setShow(false);
  };

  // console.log(pin);
  // console.log("submission");
  // console.log(submission);

  // console.log("pin");
  // console.log(pin);

  // console.log("ayuda");
  // console.log();
  if (pin == null) {
    return <div></div>;
  }

  return (
    // Your JSX code goes here
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="AddEditHeader">
          <div>Agregar/Editar corrección</div>
          <div>{pin == null ? "" : pin.criteriondesc}</div>
        </Modal.Header>
        <Modal.Body className="AddEditBody">
          <div className="AddEditBodyRows">
            Nivel
            <select
              className="WidthRight"
              style={{ textAlign: "right" }}
              defaultValue={pin.levelid}
            >
              {submission.data.values.rubric[pin.criterionid].levels.map(
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
            />
          </div>
          <div className="AddEditBodyRows">
            Ajustar Puntaje
            <input
              className="WidthRight"
              defaultValue="+0"
              style={{ textAlign: "right" }}
            ></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddEditModal;
