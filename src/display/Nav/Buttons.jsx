// import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
import {
  faMapMarker,
  faComment,
  faCheck,
  faRemove,
  faPencil,
  faCircleQuestion,
  faHighlighter,
  faExternalLink,
  faSave,
  faTrophy,
  faTh,
  faTint,
  faCircleInfo,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/styles_nav.css";
const Botones = () => {
  const handleDivClick = (id) => {
    const div = document.getElementById(id);
    const divs = document.getElementsByClassName("button_selected");
    for (let i = 0; i < divs.length; i++) {
      divs[i].classList.remove("button_selected");
    }
    div.classList.add("button_selected");
  };

  return (
    <div className="nav-bar sticky-top">
      <Tabs
        defaultActiveKey="corregir"
        transition={false}
        id="noanim-tab-example"
      >
        <Tab eventKey="corregir" title="Corregir">
          <div className="wrap">
            <div id="1" onClick={() => handleDivClick("1")}>
              <FontAwesomeIcon icon={faMapMarker} />
            </div>
            <div id="2" onClick={() => handleDivClick("2")}>
              <FontAwesomeIcon icon={faComment} />
            </div>
            <div id="3" onClick={() => handleDivClick("3")}>
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div id="4" onClick={() => handleDivClick("4")}>
              <FontAwesomeIcon icon={faRemove} />
            </div>
            <div id="5" onClick={() => handleDivClick("5")}>
              <FontAwesomeIcon icon={faPencil} />
            </div>
            <div id="6" onClick={() => handleDivClick("6")}>
              <FontAwesomeIcon icon={faCircleQuestion} />
            </div>
            <div id="7" onClick={() => handleDivClick("7")}>
              <FontAwesomeIcon icon={faHighlighter} />
            </div>
          </div>
        </Tab>
        <Tab eventKey="prueba" title="Prueba">
          <div className="wrap">
            <div id="8" onClick={() => handleDivClick("8")}>
              <FontAwesomeIcon icon={faExternalLink} />
              <p>Abrir Siguiente</p>
            </div>
            <div id="9" onClick={() => handleDivClick("9")}>
              <FontAwesomeIcon icon={faSave} />
              <p>Guardar y cerrar</p>
            </div>
            <div id="10" onClick={() => handleDivClick("10")}>
              <FontAwesomeIcon icon={faTrophy} />
              <p>Pauta</p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="ver" title="Ver">
          <div className="wrap">
            <div id="11" onClick={() => handleDivClick("11")}>
              <FontAwesomeIcon icon={faTh} />
              <p>Mostrar rúbrica</p>
            </div>
            <div id="12" onClick={() => handleDivClick("12")}>
              <FontAwesomeIcon icon={faTint} />
              <p>Rúbrica multicolor</p>
            </div>
            <div id="13" onClick={() => handleDivClick("13")}>
              <FontAwesomeIcon icon={faMapMarker} />
              <p>Ícono/Texto</p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="ayuda" title="Ayuda">
          <div className="wrap">
            <div id="14" onClick={() => handleDivClick("14")}>
              <FontAwesomeIcon icon={faCircleInfo} />
              <p>Sobre e-marking</p>
            </div>
            <div id="15" onClick={() => handleDivClick("15")}>
              <FontAwesomeIcon icon={faBook} />
              <p>Tutoriales</p>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
export default Botones;
