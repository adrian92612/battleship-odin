import { Ship } from "./ship";
import * as dom from "./dom";

class Cell {
  constructor(element, x, y) {
    this.element = element;
    this.coordinates = { x, y };
  }
}

export default function Gameboard() {
  const gridSize = 10;
  const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(null));
  const shipArray = [];
  const cellsArray = [];

  const isWithinBoard = (x, y) => x >= 0 && x <= 9 && y >= 0 && y <= 9;
  const getCell = (x, y) => cellsArray.find((c) => c.coordinates.x === x && c.coordinates.y === y);
  const isValidCell = (x, y) => isWithinBoard(x, y) && grid[x][y] === null;

  const getCornerCells = (x, y) => {
    const cornerCells = [
      [x - 1, y - 1],
      [x - 1, y + 1],
      [x + 1, y + 1],
      [x + 1, y - 1],
    ];
    return cornerCells.filter(([x, y]) => isWithinBoard(x, y)).sort();
  };

  const getNeighborCells = (x, y) => {
    const neighborCells = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
      [x - 1, y - 1],
      [x - 1, y + 1],
      [x + 1, y + 1],
      [x + 1, y - 1],
    ];
    return neighborCells
      .filter(([x, y]) => isWithinBoard(x, y))
      .filter(([x, y]) => !(grid[x][y] instanceof Ship))
      .sort();
  };

  return {
    grid,

    allShipsSunk: () => shipArray.every((x) => x.sunk === true),

    placeShip: (ship, x, y, horizontal = true) => {
      // set ship's coordinates
      for (let i = 0; i < ship.length; i++) {
        const newX = horizontal ? x + i : x;
        const newY = horizontal ? y : y + i;
        ship.coordinates.push([newX, newY]);
      }
      // check if all cells in coordinate are valid
      if (!ship.coordinates.every(([x, y]) => isValidCell(x, y))) {
        ship.coordinates = [];
        return false;
      }
      // store in shipArray
      shipArray.push(ship);
      // Put ship on every cell
      ship.coordinates.map(([x, y]) => (grid[x][y] = ship));
      // store neighbor cells
      ship.neighborCells = [
        ...new Set(
          [...ship.coordinates.map(([x, y]) => getNeighborCells(x, y))].flat(1).map(JSON.stringify)
        ),
      ].map(JSON.parse);
      // set neighbor cells to NA
      ship.neighborCells.forEach(([x, y]) => (grid[x][y] = "N/A"));
      return true;
    },

    receiveAttack: (x, y) => {
      if (!(grid[x][y] instanceof Ship)) return false;
      grid[x][y].hit();
      return true;
    },

    render: (human = true) => {
      const container = human
        ? document.querySelector(".player-board")
        : document.querySelector(".computer-board");
      grid.forEach((row, x) => {
        row.forEach((column, y) => {
          cellsArray.push(dom.createCells(container, x, y));
        });
      });
    },
  };
}

export { Cell };
