import "./style.css";
import Gameboard from "./gameboard";
import { Ship } from "./ship";
import { Player, Bot } from "./player";
import * as dom from "./dom";

const BOT_BOARD = document.querySelector(".bot-board");

async function init() {
  const human = Gameboard("human");
  const bot = Gameboard("bot");
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
  console.log(cells.length);
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
  bot.placeShip(new Ship(4), 3, 3, false);
  bot.placeShip(new Ship(3), 8, 2, true);

  // show bot board
  bot.render();
  dom.showBotBoard();

  let GameOver = false;

  while (!GameOver) {
    // enable clicks on bot board
    BOT_BOARD.style.pointerEvents = "all";
    // get player attack coordinate
    const [x, y] = await playerTurn();
    // bot receive attack, if hit disable corner cells as well
    if (bot.receiveAttack(x, y)) {
      dom.updateCell(x, y, "bot", "hit");

      let cornerCells = bot.getCornerCells(x, y);
      console.log(cornerCells);

      // forEach(([x, y]) => {
      //   const cell = document.querySelector(
      //     `[dataset-x="${x}"][dataset-y="${y}"][dataset-owner="bot"]`
      //   );
      //   console.log(cell);
      // });
    }
    // disable click on bot board
    BOT_BOARD.style.pointerEvents = "none";
  }
}

init();
