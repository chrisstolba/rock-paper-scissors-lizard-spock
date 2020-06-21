let gameData = {
  scissors: {
    beats: ["paper", "lizard"],
  },
  paper: {
    beats: ["rock", "spock"],
  },
  rock: {
    beats: ["lizard", "scissors"],
  },
  lizard: {
    beats: ["spock", "paper"],
  },
  spock: {
    beats: ["scissors", "rock"],
  },
};

export default { gameData };
