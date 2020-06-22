import React from "react";

import scissorIcon from "../images/icon-scissors.svg";
import paperIcon from "../images/icon-paper.svg";
import spockIcon from "../images/icon-spock.svg";
import lizardIcon from "../images/icon-lizard.svg";
import rockIcon from "../images/icon-rock.svg";

let WinLoss = ({ userPick, compPick, winner, updateGameState }) => {
  let userPickIcon = null;
  let userIconStyle = null;
  let compPickIcon = null;
  let compIconStyle = null;

  let styles = {
    scissorStyle: {
      background:
        "radial-gradient(at top, var(--scissors-gradient-start), var(--scissors-gradient-end))",
    },
    paperStyle: {
      background:
        "radial-gradient(at top, var(--paper-gradient-start), var(--paper-gradient-end))",
    },
    spockStyle: {
      background:
        "radial-gradient(at top, var(--spock-gradient-start), var(--spock-gradient-end))",
    },
    lizardStyle: {
      background:
        "radial-gradient(at top, var(--lizard-gradient-start), var(--lizard-gradient-end))",
    },
    rockStyle: {
      background:
        "radial-gradient(at top, var(--rock-gradient-start), var(--rock-gradient-end))",
    },
  };

  switch (userPick) {
    case "paper":
      userPickIcon = paperIcon;
      userIconStyle = styles.paperStyle;
      break;
    case "scissor":
      userPickIcon = scissorIcon;
      userIconStyle = styles.scissorStyle;
      break;
    case "spock":
      userPickIcon = spockIcon;
      userIconStyle = styles.spockStyle;
      break;
    case "rock":
      userPickIcon = rockIcon;
      userIconStyle = styles.rockStyle;
      break;
    case "lizard":
      userPickIcon = lizardIcon;
      userIconStyle = styles.lizardStyle;
      break;
    default:
      break;
  }

  switch (compPick) {
    case "paper":
      compPickIcon = paperIcon;
      compIconStyle = styles.paperStyle;
      break;
    case "scissor":
      compPickIcon = scissorIcon;
      compIconStyle = styles.scissorStyle;
      break;
    case "spock":
      compPickIcon = spockIcon;
      compIconStyle = styles.spockStyle;
      break;
    case "rock":
      compPickIcon = rockIcon;
      compIconStyle = styles.rockStyle;
      break;
    case "lizard":
      compPickIcon = lizardIcon;
      compIconStyle = styles.lizardStyle;
      break;
    default:
      break;
  }

  return (
    <div className="winLossWrapper">
      <div className="userPickContainer">
        <p className="userPickText">YOU PICKED</p>
        <div className="userPickOutterCircle" style={userIconStyle}>
          <div className="userPickInnerCircle">
            <img className="userPickIcon" src={userPickIcon} alt="Users Pick" />
          </div>
        </div>
      </div>
      <div className="winLossWrapper">
        <p className="winLossText">
          {winner === "draw"
            ? "DRAW"
            : winner === "user"
            ? "YOU WIN"
            : "YOU LOSE"}
        </p>
        <div className="playAgainContainer">
          <p className="playAgainText">PLAY AGAIN</p>
        </div>
      </div>
      <div className="compPickContainer">
        <p className="compPickText">THE HOUSE PICKED</p>
        <div className="compPickOutterCircle" style={compIconStyle}>
          <div className="compPickInnerCircle">
            <img className="compPickIcon" src={compPickIcon} alt="Comps Pick" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinLoss;
