import "./style.css";
import Gameboard from "./gameboard";
import { Ship } from "./ship";

const gb = Gameboard();
gb.placeShip(new Ship(4), 0, 0);
gb.placeShip(new Ship(4), 5, 4);
gb.placeShip(new Ship(1), 2, 8);
gb.placeShip(new Ship(3), 2, 7);

console.log(gb.grid);
