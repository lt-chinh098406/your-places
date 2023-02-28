import React from "react";

import "../assets/styles/components/the-header.css";

const TheHeader = (props) => {
  return <header className="the-header">{props.children}</header>;
};

export default TheHeader;
