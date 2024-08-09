// import React from "react";
import Rubric from "./Rubric/Rubric.jsx";
import Photos from "./Photos.jsx";

// import "./styles_body.css";
import "../Styles/styles_body.css";
import AjaxRequest from "../AjaxRequest.jsx";
import React, { useState, useEffect } from "react";
import TopDiv from "../Nav/TopDiv.jsx";
import axios from "axios";
import AddEditModal from "../AddEdit/EditModal.jsx";
import { updateApp } from "./Functions.jsx";
import Logo from "./Loading.jsx";

export const Context = React.createContext();

const Body = () => {
  const [json, setJson] = useState(null);
  const [submission, setSubmission] = useState(null);
  const [ping, setPing] = useState(null);
  const [allTabs, setAllTabs] = useState(null);
  const [prevComments, setPrevComments] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeMarkIcon, setActiveMarkIcon] = useState("2");
  // const ids = 203;
  const urlParams = new URLSearchParams(window.location.search);
  const ids = urlParams.get("id");
  // const action = "getsubmission";
  useEffect(() => {
    updateApp(setAllTabs, setSubmission, setPrevComments,setPing);
  }, []);

  if (submission == null || allTabs == null || ping == null) {
    return <Logo />;
  }
  return (
    <div>
      <Context.Provider
        value={{
          ping,
          setPing,
          submission,
          setSubmission,
          allTabs,
          setAllTabs,
          loading,
          setLoading,
          activeMarkIcon,
          setActiveMarkIcon,
          prevComments,
          setPrevComments,
        }}
      >
        <TopDiv />
        <div className="box">
          <Rubric />
          <Photos />
        </div>
      </Context.Provider>
    </div>
  );
};

export default Body;
