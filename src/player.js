import Gameboard from "./gameboard";

function Player(playerName = "Jack Sparrow") {
  const name = playerName;
  const gameboard = Gameboard();

  return {
    name,
    gameboard,

    attack: (x, y, board) => {
      board.receiveAttack(x, y);
    },

    // addListener: (board) => {
    //   gameboard.cellsArray
    //     .filter((c) => c.active === true)
    //     .forEach((c) => c.element.addEventLister("click", clickHandler));
    // },
  };
}

function Bot(botName = "Admiral AI") {
  const name = botName;
  const board = Gameboard("bot");
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
    board,

    attack: (board) => {
      const { x, y } = generateCoordinates();
      board.receiveAttack(x, y);
    },
  });
}

export { Player, Bot };
