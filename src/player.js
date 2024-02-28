import Gameboard from "./gameboard";

function Player(playerName) {
  const name = playerName;
  const playerBoard = Gameboard();

  return {
    name,

    attack: (x, y, board) => {
      board.receiveAttack(x, y);
    },
  };
}

function Computer(compName = "Admiral AI") {
  const name = compName;
  const computerBoard = Gameboard();
  const prevAtks = [];

  const generateCoordinates = () => {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (prevAtks.includes(`${x},${y}`));
    prevAtks.push(`${x},${y}`);
    return { x, y };
  };

  return Object.freeze({
    name,

    attack: (board) => {
      const { x, y } = generateCoordinates();
      board.receiveAttack(x, y);
    },
  });
}

export { Player, Computer };
