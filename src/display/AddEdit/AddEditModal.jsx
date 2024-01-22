import React from "react";
// import Modal from "react-modal";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useContext } from "react";
import "../Styles/styles_modal.css";
import { Context } from "../Body/Body.jsx";
import axios from "axios";
import { getJson } from "../Body/Functions.jsx";

const AddEditModal = ({ show, setShow, pin, photoId }) => {
  // Your component logic goes here

  const [submission, setSubmission, allTabs, setAllTabs] = useContext(Context);
  const emarking = "http://localhost/mod/emarking/ajax/a.php";
  const [newLevel, setNewLevel] = useState(null);
  const [comment, setComment] = useState("aaa");
  const [bonus, setBonus] = useState("+0");

  const handleClose = () => {
    setShow(false);
  };

  const urlParams = new URLSearchParams(window.location.search);
  const ids = urlParams.get("id");
  

  const handleSave = (lol) => {
    try {
      axios
        .get(
          emarking +
            "?ids=" +
            ids +
            "&action=updcomment&cid=" +
            pin.id +
            "&posx=" +
            pin.posx * parseInt((window.innerWidth / 10) * 6) +
            "&posy=" +
            pin.posy * parseInt((window.innerWidth / 10) * 8) +
            "&bonus=" +
            bonus +
            "&format=" +
            pin.format +
            "&levelid=" +
            newLevel +
            "&regradeid=" +
            pin.regradeid +
            "&regradeaccepted=" +
            pin.regradeaccepted +
            "&regrademarkercomment=" +
            pin.regrademarkercomment +
            "&markerid=" +
            pin.markerid + //This should be your id!!!
            "&width=" +
            pin.width +
            "&height=" +
            pin.height +
            "&comment=" +
            comment +
            "&windowswidth=" + //Width an heigth OF THE IMG TAG
            parseInt((window.innerWidth / 10) * 6) + //60 vw
            "&windowsheight=" +
            parseInt((window.innerWidth / 10) * 8) + //80 VW (WIDTH)
            "&feedback=" +
            ""
        )
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.error("Error fetching data:");
      console.error(error);
    } finally {
      try {
        getJson("getsubmission", 0, setSubmission, setAllTabs);
        getJson("getalltabs", 1, setSubmission, setAllTabs);
      } catch (error) {
        console.log("eroooor");
        console.log(error);
      }
    }

    setShow(false);
  };

  if (pin == null) {
    return <div></div>;
  }

  return (
    // Your JSX code goes here
      <Modal animation = {true} show={show} onHide={handleClose}>
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
              onChange={(e) => setNewLevel(e.target.value)}
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
          <Button variant="primary" onClick={() => handleSave(203)}>
            {/* 203 is the id of the placeholder submission */}
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default AddEditModal;
