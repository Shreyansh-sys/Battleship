import { Ship } from "./ship";

describe("Ship", () => {
  test("creates a ship with the correct length and hit count", () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
    expect(ship.hitsTaken).toBe(0);
    expect(ship.hitPositions).toEqual([false, false, false]); // Check initial hitPositions
  });

  test("hit() increases the number of hits at the specific index", () => {
    const ship = new Ship(3);
    ship.hit(0);
    ship.hit(1);
    expect(ship.hitsTaken).toBe(2);
    expect(ship.hitPositions).toEqual([true, true, false]); // Check hitPositions
  });

  test('isSunk() returns false when hits are less than length', () => {
    const ship = new Ship(3);
    ship.hit(0);
    ship.hit(1);
    expect(ship.isSunk()).toBe(false);
  });

  test('isSunk() returns true when hits are equal to length', () => {
    const ship = new Ship(2);
    ship.hit(0);
    ship.hit(1);
    expect(ship.isSunk()).toBe(true);
  });

  test('hit() does not increase hits for the same index more than once', () => {
    const ship = new Ship(3);
    ship.hit(1);
    ship.hit(1); // Attempt to hit the same position again
    expect(ship.hitsTaken).toBe(1); // Should only be 1 hit
    expect(ship.hitPositions).toEqual([false, true, false]); // Check hitPositions
  });
});
