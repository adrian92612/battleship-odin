import "./style.css";
import Gameboard from "./gameboard";
import { Ship } from "./ship";
import { Bot } from "./player";
import * as dom from "./dom";

const BOT_BOARD = document.querySelector(".bot-board");
const PLAYER_BOARD = document.querySelector(".human-board");
const SHIPS = [new Ship(5), new Ship(4), new Ship(3), new Ship(3), new Ship(2)];

async function init() {
  const human = Gameboard("human");
  const bot = Bot();
  const playerName = `Admiral ${await dom.getPlayerName()}`;
  dom.showPlayerBoard(playerName);

  // Place these ships on board
  const ships = [new Ship(5), new Ship(4), new Ship(3), new Ship(3), new Ship(2)];
  human.render();
  dom.showShipAxis();
  while (ships.length > 0) {
    await placeShipOnBoard(human, ships.shift());
  }
  dom.showShipAxis(false);

  const startGame = document.querySelector("#start-game");
  startGame.removeAttribute("style");
  startGame.addEventListener(
    "click",
    (e) => {
      runGame(human, bot);
      startGame.setAttribute("style", "display:none");
    },
    { once: true }
  );
}

async function runGame(human, bot) {
  console.log("game!!");

  const botShips = [new Ship(5), new Ship(4), new Ship(3), new Ship(3), new Ship(2)];
  // show bot board
  bot.board.render();
  while (botShips.length > 0) {
    placeBotShips(bot, botShips.shift());
  }
  dom.showBotBoard();

  let isGameOver = false;
  let playerWin;

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
      playerWin = true;
      break;
    }

    // Bot turn
    const [bX, bY] = await bot.getXY(); // 0.1 sec delay before bot attack
    const botMark = human.receiveAttack(bX, bY) ? "hit" : "missed";
    dom.updateBoard(human, botMark, bX, bY, bot);
    if (human.allShipsSunk()) {
      isGameOver = true;
      playerWin = false;
    }
  }

  console.log("END!!!");
  dom.showWinner(playerWin);
}

function placeBotShips(bot, ship) {
  const shipAxis = Math.random() < 0.5;
  let x, y;
  do {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
  } while (!bot.board.placeShip(ship, x, y, shipAxis));
  bot.board.render();
}

function placeShipOnBoard(board, ship) {
  // array of Ships, get one, get cell x,y on mousehover, get ship coordinates,
  // check if all coordinates are null in board, place ships, render board, get another ship repeat
  return new Promise((resolve) => {
    const cells = Array.from(PLAYER_BOARD.children);
    const axis = document.querySelector("#axis");
    for (const c of cells) {
      c.addEventListener("mouseover", highlightShip);
      c.addEventListener("mouseout", removeHighlight);
      c.addEventListener("click", confirmPlacement);
    }

    function confirmPlacement(e) {
      const c = e.target;
      const x = parseInt(c.dataset.x);
      const y = parseInt(c.dataset.y);
      const a = axis.innerText === "Horizontal" ? true : false;
      if (board.placeShip(ship, x, y, a)) {
        board.render();
        resolve("good");
      }
    }

    function removeHighlight(e) {
      for (const c of cells) {
        c.classList.remove("temp-ship");
      }
    }

    function highlightShip(e) {
      const c = e.target;
      let x = parseInt(c.dataset.x);
      let y = parseInt(c.dataset.y);
      ship.coordinates = [];
      for (let i = 0; i < ship.length; i++) {
        const newX = axis.innerText === "Horizontal" ? x + i : x;
        const newY = axis.innerText === "Vertical" ? y + i : y;
        ship.coordinates.push([newX, newY]);
      }
      if (ship.coordinates.every(([x, y]) => board.isValidCell(x, y))) {
        for (const [x, y] of ship.coordinates) {
          const tempC = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
          tempC.classList.add("temp-ship");
        }
      }
    }
  });
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

init();
