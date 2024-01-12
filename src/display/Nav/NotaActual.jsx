import React from "react";
import { useContext, useState, useEffect } from "react";
import { Context } from "../Body.jsx";
import "./styles_nav.css";

const NotaActual = () => {
  const [json, setJson] = useContext(Context);
  const [nota, setNota] = useState("null");
  useEffect(() => {
    if (json != null) {
      setNota(json.data.values.finalgrade);
    }
  }, [json, nota]);
  return <div className="notaActual">{nota}</div>;
};

export default NotaActual;
