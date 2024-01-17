import React from "react";
import { useContext, useState, useEffect } from "react";
import { Context } from "../Body/Body.jsx";
import "../Styles/styles_nav.css";

const NotaActual = () => {
  const [submission, setSubmission] = useContext(Context);
  const [nota, setNota] = useState("null");
  useEffect(() => {
    if (submission != null) {
      setNota(submission.data.values.finalgrade);
    }
  }, [submission, nota]);
  return <div className="notaActual">{nota}</div>;
};

export default NotaActual;
