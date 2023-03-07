import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../context/auth-context";
import "../assets/styles/components/the-nav-links.css";
import TheButton from "./TheButton";

const TheNavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="the-nav-links">
      <li>
        <NavLink to="/">ALL USERS</NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <TheButton onClick={auth.logout}>LOGOUT</TheButton>
        </li>
      )}
    </ul>
  );
};

export default TheNavLinks;
