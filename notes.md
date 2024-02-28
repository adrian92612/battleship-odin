      check if coordinate is available given the ship's length ✔️
      place ship, make surrounding cells unavailable ✔️
       - store ship's coordinates, determine surrounding cells ✔️
       - make neighbor cells N/A ✔️

tasks
-- can't place ship within other ship's neighbor cells ✔️
--

\*\*receiveAttack function

1. get coordinates
2. check if cell is ship
3. if ship, call ship.hit, get and remove corner cells
4. if ship is sunk, check if no ships left
