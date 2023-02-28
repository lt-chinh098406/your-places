import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/the-button.css";

const TheButton = (props) => {
  if (props.href) {
    return (
      <a
        className={`the-button the-button--${props.size || "default"} ${
          props.inverse && "the-button--inverse"
        } ${props.danger && "the-button--danger"}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        className={`the-button the-button--${props.size || "default"} ${
          props.inverse && "the-button--inverse"
        } ${props.danger && "the-button--danger"}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`the-button the-button--${props.size || "default"} ${
        props.inverse && "the-button--inverse"
      } ${props.danger && "the-button--danger"}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default TheButton;
