import React from "react";

import "../assets/styles/components/the-card.css";

const TheCard = (props) => {
  return (
    <div className={`the-card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default TheCard;
