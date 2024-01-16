// import React from "react";
import "./styles_rubric.css";
import Level from "./level";
import GeneralFeedback from "./General_feedback";
import Resumen from "./Resumen";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "./Body.jsx";

const Rubric = () => {
  const [submission, setSubmission] = useContext(Context);
  const [rubric, setRubric] = useState({ 1: {}, 2: {} });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (submission != null) {
      try {
        setRubric(submission.data.values.rubric);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, [submission, rubric]);

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
