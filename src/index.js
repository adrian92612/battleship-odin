import "./style.css";
import Gameboard from "./gameboard";
import { Ship } from "./ship";
import { Bot } from "./player";
import * as dom from "./dom";

const BOT_BOARD = document.querySelector(".bot-board");

async function init() {
  const human = Gameboard("human");
  // const bot = Gameboard("bot");
  const bot = Bot();
  const playerName = `Admiral ${await dom.getPlayerName()}`;
  dom.showPlayerBoard(playerName);

  //Place ships
  human.placeShip(new Ship(4), 1, 1, false);
  human.placeShip(new Ship(3), 5, 4, true);

  //render
  human.render();

  const startGame = document.querySelector("#start-game");
  startGame.addEventListener(
    "click",
    (e) => {
      runGame(human, bot);
      startGame.setAttribute("style", "display:none");
    },
    { once: true }
  );
}

function playerTurn() {
  const cells = Array.from(BOT_BOARD.children).filter((c) => c.dataset.active === "Y");
  return new Promise((res) => {
    cells.forEach((c) =>
      c.addEventListener(
        "click",
        () => {
          dom.deactivateCell(c);
          res([parseInt(c.dataset.x), parseInt(c.dataset.y)]);
        },
        { once: true }
      )
    );
  });
}

async function runGame(human, bot) {
  console.log("game!!");
  //place bot ships
  bot.board.placeShip(new Ship(4), 2, 2, false);
  bot.board.placeShip(new Ship(3), 5, 2, true);
  bot.board.placeShip(new Ship(1), 3, 7, true);

  // show bot board
  bot.board.render();
  dom.showBotBoard();

  let isGameOver = false;

  while (!isGameOver) {
    // enable clicks on bot board
    BOT_BOARD.style.pointerEvents = "all";
    // get player attack coordinate
    const [x, y] = await playerTurn();
    // disable click on bot board
    BOT_BOARD.style.pointerEvents = "none";
    // bot receive attack, if hit disable corner cells as well
    const mark = bot.board.receiveAttack(x, y) ? "hit" : "missed";
    dom.updateBoard(bot.board, mark, x, y);
    if (bot.board.allShipsSunk()) {
      isGameOver = true;
      break;
    }

    // Bot turn
    const [bX, bY] = await bot.getXY(); // 0.5 sec delay before bot attack
    const botMark = human.receiveAttack(bX, bY) ? "hit" : "missed";
    dom.updateBoard(human, botMark, bX, bY, bot);
    if (human.allShipsSunk()) isGameOver = true;
  }

  console.log("END!!!");
}

init();
