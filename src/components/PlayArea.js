import React from "react";

import UserPick from "./UserPick";
import CompWait from "./CompWait";
import CompPick from "./CompPick";
import WinLoss from "./WinLoss";

let PlayArea = ({
  gameState,
  updateGameState,
  userPick,
  compPick,
  setUserPick,
  winner,
}) => {
  switch (gameState) {
    case "user-pick":
      return (
        <UserPick setUserPick={setUserPick} updateGameState={updateGameState} />
      );
    case "comp-wait":
      return <CompWait userPick={userPick} updateGameState={updateGameState} />;
    case "comp-pick":
      return (
        <CompPick
          userPick={userPick}
          compPick={compPick}
          updateGameState={updateGameState}
        />
      );
    case "win-loss":
      return (
        <WinLoss
          userPick={userPick}
          compPick={compPick}
          winner={winner}
          updateGameState={updateGameState}
        />
      );
    default:
      return null;
  }
};

export default PlayArea;
