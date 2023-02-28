import React from "react";
import ReactDom from "react-dom";
import { Transition } from "react-transition-group";

import "../assets/styles/components/the-side-drawer.css";

const TheSideDrawer = (props) => {
  const nodeRef = React.useRef(null);

  const content = (
    <Transition
      nodeRef={nodeRef}
      in={props.show}
      timeout={200}
      classNames="side-in-left"
      mountOnEnter
      unmountOnExit
    >
      {() => (
        <aside onClick={props.onClick} className="the-side-drawer">
          {props.children}
        </aside>
      )}
    </Transition>
  );

  return ReactDom.createPortal(content, document.getElementById("drawer-hook"));
};

export default TheSideDrawer;
