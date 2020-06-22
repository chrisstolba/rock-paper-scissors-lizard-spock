import React from "react";

import scissorIcon from "../images/icon-scissors.svg";
import paperIcon from "../images/icon-paper.svg";
import spockIcon from "../images/icon-spock.svg";
import lizardIcon from "../images/icon-lizard.svg";
import rockIcon from "../images/icon-rock.svg";

let UserPick = ({ setUserPick, updateGameState }) => {
  let handlePick = (evt) => {
    evt.preventDefault();
    let target = evt.target.dataset.value;
    setUserPick(target);
    updateGameState();
  };

  return (
    <div className="userPickWrapper">
      <div
        className="scissorsWrapper"
        onClick={handlePick}
        data-value="scissor"
      >
        <div className="innerCircle" data-value="scissor">
          <img
            className="iconImage"
            src={scissorIcon}
            alt="Scissor Icon"
            data-value="scissor"
          />
        </div>
      </div>
      <div className="paperWrapper" onClick={handlePick} data-value="paper">
        <div className="innerCircle" data-value="paper">
          <img
            className="iconImage"
            src={paperIcon}
            alt="Paper Icon"
            data-value="paper"
          />
        </div>
      </div>
      <div className="spockWrapper" onClick={handlePick} data-value="spock">
        <div className="innerCircle" data-value="spock">
          <img
            className="iconImage"
            src={spockIcon}
            alt="Spock Icon"
            data-value="spock"
          />
        </div>
      </div>
      <div className="lizardWrapper" onClick={handlePick} data-value="lizard">
        <div className="innerCircle" data-value="lizard">
          <img
            className="iconImage"
            src={lizardIcon}
            alt="Lizard Icon"
            data-value="lizard"
          />
        </div>
      </div>
      <div className="rockWrapper" onClick={handlePick} data-value="rock">
        <div className="innerCircle" data-value="rock">
          <img
            className="iconImage"
            src={rockIcon}
            alt="Rock Icon"
            data-value="rock"
          />
        </div>
      </div>
    </div>
  );
};

export default UserPick;
