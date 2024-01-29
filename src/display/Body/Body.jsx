// import React from "react";
import Rubric from "./Rubric/Rubric.jsx";
import Photos from "./Photos.jsx";

// import "./styles_body.css";
import "../Styles/styles_body.css";
import AjaxRequest from "../AjaxRequest.jsx";
import React, { useState, useEffect } from "react";
import TopDiv from "../Nav/TopDiv.jsx";
import axios from "axios";
import AddEditModal from "../AddEdit/AddEditModal.jsx";
import { getJson, updateApp } from "./Functions.jsx";
import Logo from "./Loading.jsx";

export const Context = React.createContext();

const Body = () => {
  const [json, setJson] = useState(null);
  const [submission, setSubmission] = useState(null);
  const [allTabs, setAllTabs] = useState(null);
  const [loading, setLoading] = useState(false);
  const emarking = "http://localhost/mod/emarking/ajax/a.php";
  // const ids = 203;
    const urlParams = new URLSearchParams(window.location.search);
  const ids = urlParams.get("id");
  // const action = "getsubmission";
  useEffect(() => {
    updateApp(setAllTabs,setSubmission);
  },[]);
  // useEffect(() => {
  //   console.log("use efect submission alltabs")
  //   if (setSubmission){
  //     loading[0] = false;
  //   }
  //   if (setAllTabs){
  //     loading[1] = false;
  //   }
  // }, [submission, allTabs]);

  // if (loading[0] || loading[1]) {
  //   return <p>Loading...</p>; // This single loading is the goat of the code
  // }

  // if(submission == null || allTabs == null){
  if(submission == null || allTabs == null){
    return <Logo />
  }
  // if(allTabs === null){
  //   return <p>AllTabs is null</p>
  // }

  return (
    <div>
      <Context.Provider
        value={{submission, setSubmission, allTabs, setAllTabs,loading, setLoading}}
      >
        {/* <AjaxRequest
          ids={203}
          action="getsubmission"
        /> */}
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
