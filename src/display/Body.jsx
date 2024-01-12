// import React from "react";
import Rubric from "./Rubric.jsx";
import Photos from "./Photos.jsx";

import "./styles_body.css";
import AjaxRequest from "./AjaxRequest.jsx";
import React, { useState, useEffect } from "react";
import TopDiv from "./Nav/TopDiv.jsx";
import axios from "axios";
export const Context = React.createContext();

const Body = () => {
  const [json, setJson] = useState(null);
  const [loading, setLoading] = useState(true);
  const emarking = "http://localhost/mod/emarking/ajax/killingmyself.php";
  const ids = 203;
  const action = "getsubmission";
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(emarking + "?ids=" + ids + "&action=" + action)
          .then((response) => {
            setJson(response);
          });
      } catch (error) {
        console.error("Error fetching data:");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // This single loading is the goat of the code
  }
  return (
    <div>
      <Context.Provider value={[json, setJson]}>
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
