import { Gameboard } from "./gameboard";

export class Player {
  constructor(name, isComputer = false) {
    this.name = name;
    this.gameboard = new Gameboard();
    this.isComputer = isComputer;
  }
  attack(opponent, coord) {
    if (this.hasAlreadyAttacked(opponent, coord)) {
      throw new Error("You have already attacked this coordinate");
    }
    if (opponent.gameboard) {
      return opponent.gameboard.receiveAttack(coord);
    }
  }
  randomAttack(opponent) {
    if (!this.isComputer) {
      return;
    }
    let coord;
    do {
      coord = this.generateRandomCoord();
    } while (this.hasAlreadyAttacked(opponent, coord));

    this.attack(opponent, coord); // Execute the attack
  return coord; // Return the coordinate that was attacked
  }
  generateRandomCoord() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    return [x, y];
  }
  hasAlreadyAttacked(opponent, coord) {
    const allAttacks = [
      ...opponent.gameboard.missedAttacks,
      ...this.getAllHitCoords(opponent),
    ];
    return allAttacks.some((attackCoord) =>
      this.gameboard.isSameCoordinate(attackCoord, coord)
    );
  }
  getAllHitCoords(opponent) {
    return opponent.gameboard.ships.flatMap((ship) =>
      ship.coordinates.filter((coord, idx) => ship.hitPositions[idx] === true)
    );
  }
}
