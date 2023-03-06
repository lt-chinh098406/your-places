import React from "react";

import "../assets/styles/components/the-map.css";

const Map = (props) => {
  return <div className="{`map ${props.className}`}" style={props.style}></div>;
};
