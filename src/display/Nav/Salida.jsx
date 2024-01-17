// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink, faSave } from "@fortawesome/free-solid-svg-icons";
import "../Styles/styles_nav.css";

const Salida = () => {
  return (
    <div className="Salida">
      <div>
        <FontAwesomeIcon icon={faExternalLink} className="BotonSalida" />
        {/* <p>Abrir Siguiente</p> */}
      </div>
      <div>
        <FontAwesomeIcon icon={faSave} className="BotonSalida" />
        {/* <p>Guardar y cerrar</p> */}
      </div>
    </div>
  );
};

export default Salida;
