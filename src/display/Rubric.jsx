// import React from "react";
import "./styles_rubric.css";
import Level from "./level";
import GeneralFeedback from "./General_feedback";
import Resumen from "./Resumen";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "./Body.jsx";

const Rubric = () => {
  const [json, setJson] = useContext(Context);
  const [rubric, setRubric] = useState({ 1: {}, 2: {} });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (json != null) {
      try {
        setRubric(json.data.values.rubric);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, [json, rubric]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="rubric">
      <div className="imported_rubric">Imported rubric</div>
      {Object.keys(rubric).map((object, index) => (
        <Level key={index} criterion={rubric[object]} />
      ))}
      <GeneralFeedback />
      <Resumen />
    </div>
  );
};

export default Rubric;
