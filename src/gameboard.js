export class Gameboard {
  constructor() {
    this.boardSize = 10;
    this.ships = [];
    this.missedAttacks = [];
  }
  placeShip(ship, startCoord, direction) {
    const newShipCoordinates = this.generateShipCoordinates(
      startCoord,
      ship.length,
      direction
    );

    if (this.areCoordinatesOccupied(newShipCoordinates)) {
      throw new Error(
        "Ship cannot be placed here, overlapping with another ship"
      );
    }
    ship.coordinates = newShipCoordinates;
    this.ships.push(ship);
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
