import { Player } from "./player";
import { Ship } from "./ship";

const computerGridContainer = document.querySelector(".computer-grid");
const playerGridContainer = document.querySelector(".player-grid");

export function startGame(highlightShipCallback) {
  const player = new Player("Player 1", false);
  const computer = new Player("Computer", true);

  let playerShip1 = new Ship(3);
  let playerShip2 = new Ship(4);
  let playerShip3 = new Ship(2);

  let computerShip1 = new Ship(3);
  let computerShip2 = new Ship(3);
  let computerShip3 = new Ship(3);

  // Add the ships to the player's gameboard
  player.gameboard.ships = [playerShip1, playerShip2, playerShip3];

  // Place the player's ships and highlight them on the grid
  player.gameboard.placeShip(playerShip1, [0, 0], "horizontal");
  highlightShipCallback([0, 0], 3, "horizontal");

  player.gameboard.placeShip(playerShip2, [3, 0], "horizontal");
  highlightShipCallback([3, 0], 4, "horizontal");

  player.gameboard.placeShip(playerShip3, [5, 0], "vertical");
  highlightShipCallback([5, 0], 2, "vertical");

  // Add the ships to the computer's gameboard
  computer.gameboard.ships = [computerShip1, computerShip2, computerShip3];
  computer.gameboard.placeShip(computerShip1, [0, 0], "horizontal");
  computer.gameboard.placeShip(computerShip2, [3, 0], "horizontal");
  computer.gameboard.placeShip(computerShip3, [5, 0], "horizontal");


  return function processAttack(coord) {
      const result = computer.gameboard.receiveAttack(coord);
      updateUI(result, coord, "computer");
    if(computer.gameboard.allShipsSunk()) {
        alert("You Won! Computer Lost!")
        return;
    }
    const compAttackCoord = (computer.randomAttack(player));
    const compAttackResult = player.gameboard.receiveAttack(compAttackCoord);
    updateUI(compAttackResult, compAttackCoord, "player");
  };
}

function updateUI(result, coord, board) {
  const gridContainer =
    board === "computer" ? computerGridContainer : playerGridContainer;
  const cell = gridContainer.querySelector(
    `[data-x="${coord[0]}"][data-y="${coord[1]}"]`
  );
  if (cell) {
    if (result === "hit") {
      cell.classList.add("hit"); // Add a class to indicate a hit
    } else if (result === "miss") {
      cell.classList.add("miss"); // Add a class to indicate a miss
    }
  }
}
