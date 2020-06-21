import React from "react";

import rulesImage from "../images/image-rules-bonus.svg";
import closeIcon from "../images/icon-close.svg";

let Modal = ({ hidden, closeRules }) => {
  let hideStyle = {
    visibility: "hidden",
  };

  return (
    <div className="rulesWrapper" style={hidden ? hideStyle : null}>
      <div className="rulesBackground">
        <h2 className="rulesHeader">RULES</h2>
        <img className="rulesImage" src={rulesImage} alt="Rules of the game" />
        <img
          className="closeIcon"
          src={closeIcon}
          alt="Close the rules"
          onClick={closeRules}
        />
      </div>
    </div>
  );
};

export default Modal;
