/*
   1. create Grid 10x10 
   2. place ships at coordinate
*/

//git

const isWithinBoard = (x, y) => x >= 0 && x <= 9 && y >= 0 && y <= 9;

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
      if (validateCoordinates(x, y, ship.length - 1, horizontal)) {
        for (let i = 0; i < ship.length; i++) {
          horizontal ? (grid[x + i][y] = ship) : (grid[x][y + i] = ship);
        }
      }
    },
  };
}
