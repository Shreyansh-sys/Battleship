export class Gameboard {
  constructor() {
    this.boardSize = 10;
    this.ships = [];
    this.missedAttacks = [];
  }
  //   placeShip(ship, startCoord, direction) {
  //     const newShipCoordinates = this.generateShipCoordinates(
  //       startCoord,
  //       ship.length,
  //       direction
  //     );

  //     while (this.areCoordinatesOccupied(newShipCoordinates)) {
  //     //   throw new Error(
  //     //     "Ship cannot be placed here, overlapping with another ship"
  //     //   );
  //     this.placeShip(ship, this.generateRandomCoord(), direction)
  //     }
  //     ship.coordinates = newShipCoordinates;
  //     this.ships.push(ship);
  //     return newShipCoordinates;
  //   }

  placeShip(ship, startCoord, direction) {
    const newShipCoordinates = this.generateShipCoordinates(
      startCoord,
      ship.length,
      direction
    );
    console.log(this.isWithinGrid(newShipCoordinates));
    // Check if the new coordinates overlap with existing ships
    if (this.areCoordinatesOccupied(newShipCoordinates) || !this.isWithinGrid(newShipCoordinates)) {
      // Return false if the ship could not be placed
      return false;
    }

    // Place the ship if no overlap
    ship.coordinates = newShipCoordinates;
    this.ships.push(ship);
    return newShipCoordinates; // Return the coordinates if placed successfully
  }

  isWithinGrid(coordinates) {
    return coordinates.every(([x, y]) =>
      x >= 0 && x < this.boardSize && y >= 0 && y < this.boardSize
    );
  }

  generateRandomCoord() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    return [x, y];
  }
  areCoordinatesOccupied(coordinates) {
    return coordinates.some((coord) =>
      this.ships.some((ship) =>
        ship.coordinates.some((c) => this.isSameCoordinate(c, coord))
      )
    );
  }
  isOccupied(startCoord) {
    return this.ships.some((ship) =>
      ship.coordinates.some((c) => this.isSameCoordinate(c, startCoord))
    );
  }
  isSameCoordinate(c1, c2) {
    return c1[0] === c2[0] && c1[1] === c2[1];
  }
  generateShipCoordinates(startCoord, shipLength, direction) {
    const coords = [];
    const [x, y] = startCoord;

    for (let i = 0; i < shipLength; i++) {
      const coord = direction === "horizontal" ? [x, y + i] : [x + i, y];
      coords.push(coord);
    }
    return coords;
  }
  receiveAttack(coord) {
    const ship = this.ships.find((ship) =>
      ship.coordinates.some((c) => this.isSameCoordinate(c, coord))
    );
    if (ship) {
      const index = ship.coordinates.findIndex((c) =>
        this.isSameCoordinate(c, coord)
      );
      ship.hit(index);
      return "hit";
    } else {
      this.missedAttacks.push(coord);
      return "miss";
    }
  }
  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}
