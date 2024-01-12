import React from "react";
import Botones from "./Buttons";
import NotaActual from "./NotaActual";
import Salida from "./Salida";
import "./styles_nav.css";

const TopDiv = () => {
  return (
    <div className="TopDiv sticky-top">
      <Botones />
      <NotaActual />
      <Salida />
    </div>
  );
};

export default TopDiv;
