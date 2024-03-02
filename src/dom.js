import { Cell } from "./gameboard";

const BOT_BOARD = document.querySelector(".bot-board");
const PLAYER_BOARD = document.querySelector(".human-board");

const createCells = (container, x, y, owner) => {
  const cellDiv = document.createElement("div");
  cellDiv.dataset.x = x;
  cellDiv.dataset.y = y;
  cellDiv.dataset.owner = owner;
  cellDiv.dataset.active = "Y";
  cellDiv.classList.add("cells");
  container.append(cellDiv);
  return cellDiv;
};

const updateCell = (x, y, owner, mark) => {
  const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"][data-owner="${owner}"]`);
  cell.classList.add(`${mark}`);
};

const deactivateCell = (c) => (c.dataset.active = "N");

function getPlayerName() {
  const form = document.querySelector("#get-name");
  let name = document.querySelector("#name");
  return new Promise((res, rej) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      name = name.value;
      e.target.setAttribute("style", "display: none");
      res(name);
    });
  });
}

function updateBoard(board, mark, x, y, bot) {
  updateCell(x, y, board.owner, mark);
  if (mark === "hit") {
    const ship = board.grid[x][y];
    const cells = ship.sunk ? ship.neighborCells : board.getCornerCells(x, y);
    console.log(cells);
    for (const [cx, cy] of cells) {
      const c = document.querySelector(
        `[data-x="${cx}"][data-y="${cy}"][data-owner="${board.owner}"]`
      );
      deactivateCell(c);
      updateCell(cx, cy, board.owner, "missed");
      if (board.owner === "human") bot.prevAtks.push(`${x},${y}`);
    }
  }
}

function showPlayerBoard(name) {
  const board = document.querySelector(".human-container");
  const nameTag = document.querySelector(".human-name");
  nameTag.innerText = name;
  board.removeAttribute("style");
}

function showBotBoard() {
  const board = document.querySelector(".bot-container");
  board.removeAttribute("style");
}

function showShipAxis(show = true) {
  const axisDiv = document.querySelector(".ship-axis");
  const axis = document.querySelector("#axis");
  if (show) {
    axisDiv.removeAttribute("style");
    axisDiv.addEventListener("click", () => {
      const text = axis.innerText === "Horizontal" ? "Vertical" : "Horizontal";
      axis.innerText = text;
    });
  } else {
    axisDiv.setAttribute("style", "display:none");
  }
}

export {
  createCells,
  updateCell,
  getPlayerName,
  showPlayerBoard,
  showBotBoard,
  deactivateCell,
  updateBoard,
  showShipAxis,
};
