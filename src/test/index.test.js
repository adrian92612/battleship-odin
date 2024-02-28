import { Ship } from "../ship.js";
import Gameboard from "../gameboard.js";

describe("Ship", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship(4);
  });

  test("should match length", () => expect(ship.length).toBe(4));

  test("should increment hits", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(3);
  });

  test("should detect if sunk", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.sunk).toBeTruthy();
  });
});

describe("Gameboard", () => {
  const gb = Gameboard();

  test("should create a 10x10 grid", () => {
    expect(gb.grid).toStrictEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });

  test("should place in right grid", () => {
    const ship = new Ship(4);
    gb.placeShip(ship, 0, 0, true);
    for (let i = 0; i < 4; i++) {
      expect(gb.grid[0 + i][0]).toBe(ship);
    }
  });

  test("should end if no ships left", () => {
    expect(gb.receiveAttack(0, 0)).toBeFalsy();
    expect(gb.receiveAttack(1, 0)).toBeFalsy();
    expect(gb.receiveAttack(2, 0)).toBeFalsy();
    expect(gb.receiveAttack(3, 0)).toBeTruthy();
  });
});
