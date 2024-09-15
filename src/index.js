import "./style.css";
import shipIcon from "./ship-icon.png";
import { startGame } from "./game.js"; // Import startGame

document.querySelector(".ship-icon img").src = shipIcon;

const startButton = document.querySelector(".start");
const restartButton = document.querySelector(".restart");
const playerGridContainer = document.querySelector(".player-grid");
const computerGridContainer = document.querySelector(".computer-grid");

document.addEventListener("DOMContentLoaded", function () {
  let rows = 10;
  let columns = 10;

  function createGrid(grid, rows, columns) {
    // Clear the grid first
    grid.innerHTML = "";

    const squareSize = Math.floor(500 / rows);

    for (let i = 0; i < rows; i++) {
      const row = document.createElement("div");
      row.classList.add("rows");
      grid.appendChild(row);

      for (let j = 0; j < columns; j++) {
        const sqr = document.createElement("div");
        sqr.classList.add("squares");
        sqr.style.width = `${squareSize}px`;
        sqr.style.height = `${squareSize}px`;

        // Add data attributes to identify position
        sqr.setAttribute("data-x", i);
        sqr.setAttribute("data-y", j);

        row.appendChild(sqr);
      }
    }
  }

  // Initialize grids with disabled state
  playerGridContainer.classList.add("disabled");
  computerGridContainer.classList.add("disabled");

  createGrid(playerGridContainer, rows, columns);
  createGrid(computerGridContainer, rows, columns);

  let processAttack;

  startButton.addEventListener("click", () => {
    // Enable the grids when the start button is clicked
    playerGridContainer.classList.remove("disabled");
    computerGridContainer.classList.remove("disabled");

    // Pass the highlight function to startGame
    processAttack = startGame(highlightPlayerShip); // Start the game logic

    computerGridContainer.addEventListener("click", handleAttack);
  });

  restartButton.addEventListener("click", () => {
    createGrid(playerGridContainer, rows, columns);
    createGrid(computerGridContainer, rows, columns);

    processAttack = startGame(highlightPlayerShip); // Start the game logic

    computerGridContainer.addEventListener("click", handleAttack);
  });

  // Function to highlight player ship on the grid
  function highlightPlayerShip(startPosition, length, orientation) {
    const [startX, startY] = startPosition;
    for (let i = 0; i < length; i++) {
      const x = orientation === "horizontal" ? startX : startX + i;
      const y = orientation === "horizontal" ? startY + i : startY;
      const cell = playerGridContainer.querySelector(
        `[data-x="${x}"][data-y="${y}"]`
      );
      if (cell) {
        cell.classList.add("ship-highlight"); // Add class to highlight the cell
      }
    }
  }

  function handleAttack(event) {
    const target = event.target;
    if (target.classList.contains("squares")) {
      const x = parseInt(target.getAttribute("data-x"));
      const y = parseInt(target.getAttribute("data-y"));

      // Call the function to process the attack
      if (processAttack) processAttack([x, y]);
    }
  }
});
