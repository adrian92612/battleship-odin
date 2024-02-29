import "./style.css";
import Gameboard from "./gameboard";
import { Ship } from "./ship";
import { Player, Bot } from "./player";
import * as dom from "./dom";

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
      console.log(e.target);
      startGame.setAttribute("style", "display:none");
    },
    { once: true }
  );
}

async function runGame(human, bot) {
  console.log("game!!");
  bot.render();
  dom.showBotBoard();
}

init();
