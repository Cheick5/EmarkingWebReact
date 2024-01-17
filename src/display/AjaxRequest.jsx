import { useEffect, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Context } from "./Body/Body.jsx";

const AjaxRequest = ({ ids, action }) => {
  AjaxRequest.propTypes = {
    action: PropTypes.string.isRequired,
    ids: PropTypes.number.isRequired,
  };

  const [submission, setSubmission] = useContext(Context);
  const emarking = "http://localhost/mod/emarking/ajax/placeholder.php";

  useEffect(() => {
    const fetchData = async () => {
      console.log("useEffect");
      try {
        await axios
          .get(emarking + "?ids=" + ids + "&action=" + action)
          .then((response) => {
            console.log("response of ajaxrequest");
            console.log(response);
            setSubmission(response);
          });
      } catch (error) {
        console.log("Error en axios!");
        console.error(error);
      }
    };
    fetchData();
  }, [ids, action, emarking, setSubmission]); // Add ids and action to the dependency array

  // Move console.log outside of useEffect
  console.log(submission);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default AjaxRequest;
