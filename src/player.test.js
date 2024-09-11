import { Player } from './player';
// import { Gameboard } from './gameboard';
import { Ship } from './ship';

describe("Player", () => {
  let player1;
  let player2;
  let computerPlayer;

  beforeEach(() => {
    player1 = new Player("Player 1");
    player2 = new Player("Player 2");
    computerPlayer = new Player("Computer", true);

    // Place ships on both players' boards
    const ship1 = new Ship(3);
    const ship2 = new Ship(2);
    
    player1.gameboard.placeShip(ship1, [0, 0], "horizontal");
    player2.gameboard.placeShip(ship2, [1, 0], "horizontal");
  });

  test("Player can attack opponent's gameboard", () => {
    expect(player1.attack(player2, [1, 0])).toBe("hit"); // Player1 hits Player2's ship
    expect(player1.attack(player2, [1, 1])).toBe("hit"); // Player1 hits again
    expect(player1.attack(player2, [1, 2])).toBe("miss"); // Player1 misses the last shot
  });

  test("Player cannot attack the same coordinate twice", () => {
    player1.attack(player2, [1, 0]); // First attack should be allowed
    expect(() => player1.attack(player2, [1, 0])).toThrow(
      "You have already attacked this coordinate"
    ); // Should throw an error for duplicate attack
  });

  test("Computer can attack randomly without repeating attacks", () => {
    const spy = jest.spyOn(computerPlayer, 'generateRandomCoord'); // Spy on the random coordinate generator

    computerPlayer.randomAttack(player1); // Computer player attacks
    computerPlayer.randomAttack(player1); // Computer player attacks again

    expect(spy).toHaveBeenCalledTimes(2); // Ensure random attack called twice
  });

  test("Random attack does not hit the same spot twice", () => {
    const allAttackedCoords = [];
    
    for (let i = 0; i < 100; i++) {
      const coord = computerPlayer.randomAttack(player1); // Collect all random attack coordinates
      allAttackedCoords.push(coord);
    }

    const uniqueCoords = [...new Set(allAttackedCoords.map(c => c.toString()))];
    
    // Check if no coordinate is attacked more than once
    expect(uniqueCoords.length).toBe(allAttackedCoords.length);
  });
  
});
