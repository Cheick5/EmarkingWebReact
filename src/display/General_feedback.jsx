// import React from "react";
// import { useState } from "react";

const GeneralFeedback = () => {
  return (
    <div style={{ height: "230px", borderBottom: "1px solid red" }}>
      <div>
        Retroalimentación general sobre la evaluación que se mostrará al
        estudiante
      </div>
      <textarea
        className="general_feedback"
        placeholder="Escribe aquí tu retroalimentación general"
        style={{
          resize: "both",
          width: "500px",
          height: "190px",
          backgroundColor: "white",
          color: "black",
        }}
        name="height"
      />
    </div>
  );
};

export default GeneralFeedback;
