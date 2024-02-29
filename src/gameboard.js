import { Ship } from "./ship";
import * as dom from "./dom";

class Cell {
  constructor(element, x, y) {
    this.element = element;
    this.x = x;
    this.y = y;
    this.active = true;
  }
}

export default function Gameboard(name) {
  const gridSize = 10;
  const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(null));
  const shipArray = [];
  const cellsArray = [];
  const owner = name;

  const isWithinBoard = (x, y) => x >= 0 && x <= 9 && y >= 0 && y <= 9;
  const getCell = (x, y) => cellsArray.find((c) => c.x === x && c.y === y);
  const isValidCell = (x, y) => isWithinBoard(x, y) && grid[x][y] === null;

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
    owner,
    cellsArray,
    shipArray,

    allShipsSunk: () => shipArray.every((x) => x.sunk === true),

    getCornerCells: (x, y) => {
      const cornerCells = [
        [x - 1, y - 1],
        [x - 1, y + 1],
        [x + 1, y + 1],
        [x + 1, y - 1],
      ];
      return cornerCells.filter(([x, y]) => isWithinBoard(x, y)).sort();
    },

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
      // // store corner cells
      // ship.cornerCells = [
      //   ...new Set(
      //     [...ship.coordinates.map(([x, y]) => getCornerCells(x, y))].flat(1).map(JSON.stringify)
      //   ),
      // ].map(JSON.parse);
      // set neighbor cells to NA
      ship.neighborCells.forEach(([x, y]) => (grid[x][y] = "N/A"));
      return true;
    },

    receiveAttack: (x, y) => {
      if (!(grid[x][y] instanceof Ship)) {
        return false;
      }
      grid[x][y].hit();
      return true;
    },

    render: () => {
      const container = document.querySelector(`.${owner}-board`);
      grid.forEach((column, y) => {
        column.forEach((row, x) => {
          const cell = dom.createCells(container, x, y, owner);
          if (grid[x][y] instanceof Ship) dom.updateCell(x, y, owner, "ship");
        });
      });
    },
  };
}

export { Cell };
