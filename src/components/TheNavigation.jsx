import React, { useState } from "react";
import { Link } from "react-router-dom";

import TheHeader from "./TheHeader";
import TheNavLinks from "./TheNavLinks";
import TheSideDrawer from "./TheSideDrawer";
import TheBackdrop from "./TheBackdrop";
import "../assets/styles/components/the-navigation.css";

const TheNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <TheBackdrop onClick={closeDrawer} />}

      <TheSideDrawer show={drawerIsOpen} onClick={closeDrawer}>
        <nav className="the-navigation__drawer-nav">
          <TheNavLinks />
        </nav>
      </TheSideDrawer>

      <TheHeader>
        <button className="the-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="the-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="the-navigation__header-nav">
          <TheNavLinks />
        </nav>
      </TheHeader>
    </React.Fragment>
  );
};

export default TheNavigation;
