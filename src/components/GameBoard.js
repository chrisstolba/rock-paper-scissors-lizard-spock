import React from "react";
import { useState } from "react";

import PlayArea from "./PlayArea";

import gameLogo from "../images/logo-bonus.svg";

let GameBoard = () => {
  let [score, setScore] = useState(0);
  let [gameState, setGameState] = useState("user-pick");
  let [userPick, setUserPick] = useState(null);
  let [compPick, setCompPick] = useState(null);
  let [winner, setWinner] = useState(null);

  let updateGameState = () => {
    switch (gameState) {
      case "user-pick":
        let randomPickMap = ["rock", "paper", "scissor", "lizard", "spock"];
        let randomPick = Math.floor(Math.random() * 5);
        setCompPick(randomPickMap[randomPick]);

        setGameState("comp-wait");
        break;
      case "comp-wait":
        setGameState("comp-pick");
        break;
      case "comp-pick":
        if (userPick === compPick) setWinner("draw");
        else {
          switch (userPick) {
            case "paper":
              if (compPick === "rock" || compPick === "spock") {
                setWinner("user");
                setScore(score + 1);
              } else {
                setWinner("comp");
                setScore(score - 1);
              }
              break;
            case "rock":
              if (compPick === "lizard" || compPick === "scissor") {
                setWinner("user");
                setScore(score + 1);
              } else {
                setWinner("comp");
                setScore(score - 1);
              }
              break;
            case "scissor":
              if (compPick === "paper" || compPick === "lizard") {
                setWinner("user");
                setScore(score + 1);
              } else {
                setWinner("comp");
                setScore(score - 1);
              }
              break;
            case "lizard":
              if (compPick === "spock" || compPick === "paper") {
                setWinner("user");
                setScore(score + 1);
              } else {
                setWinner("comp");
                setScore(score - 1);
              }
              break;
            case "spock":
              if (compPick === "scissor" || compPick === "rock") {
                setWinner("user");
                setScore(score + 1);
              } else {
                setWinner("comp");
                setScore(score - 1);
              }
              break;
            default:
              break;
          }
        }

        setGameState("win-loss");
        break;
      case "win-loss":
        setUserPick(null);
        setCompPick(null);
        setWinner(null);

        setGameState("user-pick");
        break;
      default:
        break;
    }
  };

  return (
    <div className="gameBoardWrapper">
      <div className="gameBoardHeader">
        <img
          className="gameLogo"
          src={gameLogo}
          alt="Rock Paper Scissors Lizard Spock"
        />
        <div className="scoreWrapper">
          <p className="scoreText">SCORE</p>
          <h1 className="scoreNumber">{score}</h1>
        </div>
      </div>
      <PlayArea
        gameState={gameState}
        updateGameState={updateGameState}
        userPick={userPick}
        compPick={compPick}
        setUserPick={setUserPick}
        winner={winner}
      />
    </div>
  );
};

export default GameBoard;
