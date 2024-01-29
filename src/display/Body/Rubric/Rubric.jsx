// import React from "react";
import "../../Styles/styles_rubric.css";
import Level from "./Levels/Level.jsx";
import GeneralFeedback from "./General_feedback.jsx";
import Resumen from "./Resumen.jsx";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Body.jsx";

const Rubric = () => {
  // const [submission, setSubmission] = useContext(Context);
  const { submission } = useContext(Context);
  const [rubric, setRubric] = useState({ 1: {}, 2: {} });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (submission != null) {
      try {
        setRubric(submission.data.values.rubric);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, [submission]);

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
