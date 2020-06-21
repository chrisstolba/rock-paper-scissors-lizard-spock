import React from "react";

let OpenModal = ({ openRules }) => {
  return (
    <div className="openModalWrapper" onClick={openRules}>
      <p className="openModalText">RULES</p>
    </div>
  );
};

export default OpenModal;
