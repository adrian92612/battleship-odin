import { Cell } from "./gameboard";

const createCells = (container, x, y, owner) => {
  const cellDiv = document.createElement("div");
  cellDiv.dataset.x = x;
  cellDiv.dataset.y = y;
  cellDiv.dataset.owner = owner;
  cellDiv.classList.add("cells");
  container.append(cellDiv);
  const cell = new Cell(cellDiv, x, y);
  return cellDiv;
};

const updateCell = (x, y, owner, mark) => {
  const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"][data-owner="${owner}"]`);
  cell.classList.add(`${mark}`);
};

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

function showPlayerBoard(name) {
  const board = document.querySelector(".human-container");
  const nameTag = document.querySelector(".human-name");
  nameTag.innerText = name;
  board.removeAttribute("style");
}

export { createCells, updateCell, getPlayerName, showPlayerBoard };
