import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const AjaxRequest = ({ ids, action }) => {
  AjaxRequest.propTypes = {
    action: PropTypes.string.isRequired,
  };

  const [response, setResponse] = useState(null);
  const emarking = "https://moodlecloud.uai.cl/mod/emarking/ajax/a.php";

  axios
    .get(
      emarking +
        "?ids=" +
        ids +
        "&action=" +
        action +
        "&callback=__gwt_jsonp__.P10.onSuccess"
    )
    .then((response) => {
      // console.log(response);
      console.log(response.data);
    });

  return { response };
};

export default AjaxRequest;
