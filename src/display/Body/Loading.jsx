import React from 'react';
import  logo  from "../../assets/WebC Logo.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "../Styles/styles_body.css";

const Loading = () => {
    // const logo = "/public/images/WebC Logo.webp"
    return (
        <div className='Loading'>
            <img src = {logo}></img>
            <FontAwesomeIcon icon={faSpinner} spin className="Spinner"/>
        </div>
    );
};

export default Loading;
