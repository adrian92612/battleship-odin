import { Cell } from "./gameboard";

const createCells = (container, x, y) => {
  const cellDiv = document.createElement("div");
  cellDiv.classList.add("cells");
  container.append(cellDiv);
  const cell = new Cell(cellDiv, x, y);
  return cell;
};

export { createCells };
