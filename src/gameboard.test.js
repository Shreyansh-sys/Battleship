import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

describe("Gameboard", () => {
  let gameboard;
  let ship1;
  let ship2;
  let ship3;

  beforeEach(() => {
    gameboard = new Gameboard();
    ship1 = new Ship(3);
    ship2 = new Ship(2);
    ship3 = new Ship(2);
    gameboard.placeShip(ship1, [0, 0], "horizontal");
    gameboard.placeShip(ship2, [3, 3], "vertical"); // Add another ship for more comprehensive testing
  });

  test("place ship on the board", () => {
    expect(gameboard.ships[0].coordinates).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
    ]);
    expect(gameboard.ships[1].coordinates).toEqual([
      [3, 3],
      [4, 3],
    ]);
  });

  test("overlap during placing ship should throw an error", () => {
    // expect(() => gameboard.placeShip(ship2, [2, 1], "horizontal")).toThrow(
    //   "Ship cannot be placed here, overlapping with another ship"
    // );
    expect(() => gameboard.placeShip(ship3, [0, 1], "horizontal")).toThrow(
      "Ship cannot be placed here, overlapping with another ship"
    );
    
    // Also test overlapping in the middle of the ship
    expect(() => gameboard.placeShip(ship3, [4, 2], "horizontal")).toThrow(
      "Ship cannot be placed here, overlapping with another ship"
    );
  });

  test("registers a hit on a ship", () => {
    expect(gameboard.receiveAttack([0, 0])).toBe("hit");
    expect(ship1.hitsTaken).toBe(1); // Ensure the ship's hit count increases
  });

  test("records a missed shot", () => {
    expect(gameboard.receiveAttack([2, 0])).toBe("miss");
    expect(gameboard.missedAttacks).toContainEqual([2, 0]);
  });

  test("return false if every ship is not sunk", () => {
    expect(gameboard.allShipsSunk()).toBe(false);
  });

  test("return true if every ship is sunk", () => {
    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);
    gameboard.receiveAttack([0, 2]);
    gameboard.receiveAttack([3, 3]);
    gameboard.receiveAttack([4, 3]);
    expect(gameboard.allShipsSunk()).toBe(true);
  });

  test("missed attacks are recorded correctly", () => {
    gameboard.receiveAttack([6, 3]); // Missed shot
    expect(gameboard.missedAttacks).toContainEqual([6, 3]);
  });

  test("attacking a coordinate multiple times only counts as one hit or miss", () => {
    gameboard.receiveAttack([0, 0]);
    expect(gameboard.receiveAttack([0, 0])).toBe("hit"); // Should still be a hit, not a miss
    expect(ship1.hitsTaken).toBe(1); // Ensure hit count does not increase
  });
});
