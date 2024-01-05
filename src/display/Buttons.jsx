// import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import "./styles_buttons.css";
const Botones = () => {
  return (
    <Tabs
      defaultActiveKey="corregir"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="corregir" title="Corregir">
        <div className="wrap">
          <div>
            <FontAwesomeIcon icon={faMapMarker} />
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div>
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div>
            <FontAwesomeIcon icon={faRemove} />
          </div>
          <div>
            <FontAwesomeIcon icon={faPencil} />
          </div>
          <div>
            <FontAwesomeIcon icon={faCircleQuestion} />
          </div>
          <div>
            <FontAwesomeIcon icon={faHighlighter} />
          </div>
        </div>
      </Tab>
      <Tab eventKey="prueba" title="Prueba">
        <div className="wrap">
          <div>
            <FontAwesomeIcon icon={faExternalLink} />
            <p>Abrir Siguiente</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faSave} />
            <p>Guardar y cerrar</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faTrophy} />
            <p>Pauta</p>
          </div>
        </div>
      </Tab>
      <Tab eventKey="ver" title="Ver">
        <div className="wrap">
          <div>
            <FontAwesomeIcon icon={faTh} />
            <p>Mostrar rúbrica</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faTint} />
            <p>Rúbrica multicolor</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faMapMarker} />
            <p>Ícono/Texto</p>
          </div>
        </div>
      </Tab>
      <Tab eventKey="ayuda" title="Ayuda">
        <div className="wrap">
          <div>
            <FontAwesomeIcon icon={faCircleInfo} />
            <p>Sobre e-marking</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBook} />
            <p>Tutoriales</p>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
};
export default Botones;
