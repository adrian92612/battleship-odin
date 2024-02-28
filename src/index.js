import "./style.css";
import Gameboard from "./gameboard";
import { Ship } from "./ship";

const gb = Gameboard();
gb.placeShip(new Ship(4), 0, 0);
gb.placeShip(new Ship(1), 5, 4);
gb.placeShip(new Ship(1), 2, 8);
gb.placeShip(new Ship(3), 2, 7);

gb.receiveAttack(0, 0);
gb.receiveAttack(1, 0);
gb.receiveAttack(2, 0);
gb.receiveAttack(3, 0);
console.log(gb.receiveAttack(5, 4));
console.log(gb.receiveAttack(2, 8));
console.log(gb.grid);
