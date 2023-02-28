import React from "react";
import { NavLink } from "react-router-dom";

import "../assets/styles/components/the-nav-links.css";

const TheNavLinks = (props) => {
  return (
    <ul className="the-nav-links">
      <li>
        <NavLink to="/">ALL USERS</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default TheNavLinks;
