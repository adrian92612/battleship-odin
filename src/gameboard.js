/*
   1. create Grid 10x10 
   2. place ships at coordinate
*/

import { Ship } from "./ship";

//git

const isWithinBoard = (x, y) => x >= 0 && x <= 9 && y >= 0 && y <= 9;

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
  return neighborCells.filter(([x, y]) => isWithinBoard(x, y));
};

function validateCoordinates(x, y, length, horizontal) {
  if (isWithinBoard(x, y)) {
    // starting coordinates
    horizontal ? (x = x + length) : (y = y + length); // ending coordinates
    return isWithinBoard(x, y);
  }
}

export default function Gameboard() {
  const gridSize = 10;
  const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(null));

  return {
    grid,

    placeShip: (ship, x, y, horizontal = true) => {
      // check if coordinate is available given the ship's length
      // place ship, make surrounding cells unavailable
      //  - store ship's coordinates, determine surrounding cells
      //  - make neighbor cells N/A
      if (validateCoordinates(x, y, ship.length - 1, horizontal)) {
        for (let i = 0; i < ship.length; i++) {
          const newX = horizontal ? x + i : x;
          const newY = horizontal ? y : y + i;
          grid[newX][newY] = ship;
          ship.coordinates.push([newX, newY]);
        }

        ship.neighborCells = [
          ...new Set(
            [...ship.coordinates.map(([x, y]) => getNeighborCells(x, y))]
              .flat(1)
              .map(JSON.stringify)
          ),
        ]
          .map(JSON.parse)
          .filter(([x, y]) => !(grid[x][y] instanceof Ship));
      }
    },
  };
}
export { getNeighborCells };
