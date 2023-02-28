import React from "react";
import ReactDOM from "react-dom";

import "../assets/styles/components/the-backdrop.css";

const TheBackdrop = (props) => {
  return ReactDOM.createPortal(
    <div className="the-backdrop" onClick={props.onClick} />,
    document.getElementById("backdrop-hook")
  );
};

export default TheBackdrop;
