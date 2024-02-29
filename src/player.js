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
  const attackTime = 500;

  return Object.freeze({
    name,
    board,

    pushToPrevAtks: (x, y) => prevAtks.push(`${x},${y}`),

    getXY: () => {
      let x, y;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      } while (prevAtks.includes(`${x},${y}`));
      prevAtks.push(`${x},${y}`);
      return new Promise((res) => setTimeout(() => res([x, y]), attackTime));
    },
  });
}

export { Player, Bot };
