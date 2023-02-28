import React from "react";

import "../assets/styles/components/the-avatar.css";

const TheAvatar = (props) => {
  return (
    <div className={`the-avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default TheAvatar;
