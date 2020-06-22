import React from "react";
import { useState } from "react";
import "./css/reset.css";
import "./css/main.css";

import Modal from "./components/Modal.js";
import OpenModal from "./components/OpenModal";
import GameBoard from "./components/GameBoard";

let App = () => {
  let [showRules, setShowRules] = useState(false);

  let closeRules = () => setShowRules(false);
  let openRules = () => setShowRules(true);

  return (
    <div className="App">
      <Modal hidden={showRules ? false : true} closeRules={closeRules} />
      <GameBoard />
      <OpenModal openRules={openRules} />
    </div>
  );
};

export default App;
