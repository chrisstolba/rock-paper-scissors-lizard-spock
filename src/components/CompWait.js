import React from "react";
import { useEffect } from "react";

import scissorIcon from "../images/icon-scissors.svg";
import paperIcon from "../images/icon-paper.svg";
import spockIcon from "../images/icon-spock.svg";
import lizardIcon from "../images/icon-lizard.svg";
import rockIcon from "../images/icon-rock.svg";

let CompWait = ({ userPick, updateGameState }) => {
  let userPickIcon = null;
  let iconStyle = null;

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
      iconStyle = styles.paperStyle;
      break;
    case "scissor":
      userPickIcon = scissorIcon;
      iconStyle = styles.scissorStyle;
      break;
    case "spock":
      userPickIcon = spockIcon;
      iconStyle = styles.spockStyle;
      break;
    case "rock":
      userPickIcon = rockIcon;
      iconStyle = styles.rockStyle;
      break;
    case "lizard":
      userPickIcon = lizardIcon;
      iconStyle = styles.lizardStyle;
      break;
    default:
      break;
  }

  useEffect(() => {
    let timer = setTimeout(() => updateGameState(), 1000);
    return () => clearTimeout(timer);
  }, [updateGameState]);

  return (
    <div className="compWaitWrapper">
      <div className="userPickContainer">
        <p className="userPickText">YOU PICKED</p>
        <div className="userPickOutterCircle" style={iconStyle}>
          <div className="userPickInnerCircle">
            <img className="userPickIcon" src={userPickIcon} alt="Users Pick" />
          </div>
        </div>
      </div>
      <div className="compWaitContainer">
        <p className="compPickText">THE HOUSE PICKED</p>
        <div className="compWaitInnerCircle"></div>
      </div>
    </div>
  );
};

export default CompWait;
