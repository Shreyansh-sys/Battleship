export class Ship {
  constructor(length, hitsTaken = 0) {
    this.length = length;
    this.hitsTaken = hitsTaken;
    this.hitPositions = new Array(length).fill(false); // Track hits at specific positions
    this.coordinates = [];
  }
  // Accept an index to mark that specific position as hit
  hit(index) {
    if (!this.hitPositions[index]) {
      // Avoid double hits at the same position
      this.hitPositions[index] = true;
      this.hitsTaken++;
    }
  }
  isSunk() {
    return this.hitsTaken >= this.length;
  }
}
