// import React from "react";
import Rubric from "./Rubric/Rubric.jsx";
import Photos from "./Photos.jsx";

// import "./styles_body.css";
import "../Styles/styles_body.css";
import AjaxRequest from "../AjaxRequest.jsx";
import React, { useState, useEffect } from "react";
import TopDiv from "../Nav/TopDiv.jsx";
import axios from "axios";
export const Context = React.createContext();

const Body = () => {
  const [json, setJson] = useState(null);
  const [submission, setSubmission] = useState(null);
  const [allTabs, setAllTabs] = useState(null);
  const [loading, setLoading] = useState([true, true]);
  const emarking = "http://localhost/mod/emarking/ajax/killingmyself.php";
  const ids = 203;
  // const action = "getsubmission";
  useEffect(() => {
    try {
      getJson("getsubmission", 0);
      getJson("getalltabs", 1);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getJson = async (action, turn) => {
    try {
      await axios
        .get(emarking + "?ids=" + ids + "&action=" + action)
        .then((response) => {
          if (turn === 0) {
            setSubmission(response);
          }
          if (turn === 1) {
            setAllTabs(response);
          }
        });
    } catch (error) {
      console.error("Error fetching data:");
      console.error(error);
    } finally {
      loading[turn] = false;
    }
  };

  if (loading[0] || loading[1]) {
    return <p>Loading...</p>; // This single loading is the goat of the code
  }
  return (
    <div>
      <Context.Provider
        value={[submission, setSubmission, allTabs, setAllTabs]}
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
