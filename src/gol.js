// Memory optimised
const width = 500;
const height = 500;
const cellSize = 1;

fps = 10

// Create an empty grid
let grid = new Array(width * height / (cellSize * cellSize)).fill(0);

// Seed the grid with random values
for (let i = 0; i < grid.length; i++) {
  grid[i] = Math.round(Math.random());
}

// Returns the number of alive neighbors for a given cell
function countAliveNeighbors(grid, x, y) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      let row = (x + i + width / cellSize) % (width / cellSize);
      let col = (y + j + height / cellSize) % (height / cellSize);
      let index = row * (height / cellSize) + col;
      count += grid[index];
    }
  }
  return count;
}

// Updates the grid to the next generation
function update(grid) {
  let next = new Array(grid.length).fill(0);
  for (let i = 0; i < grid.length; i++) {
    let x = Math.floor(i / (height / cellSize));
    let y = i % (height / cellSize);
    let alive = countAliveNeighbors(grid, x, y);
    if (grid[i] === 1 && (alive === 2 || alive === 3)) {
      next[i] = 1;
    } else if (grid[i] === 0 && alive === 3) {
      next[i] = 1;
    }
  }
  return next;
}

// Draw the grid
function draw(grid) {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < grid.length; i++) {
    let x = (i % (height / cellSize)) * cellSize;
    let y = Math.floor(i / (height / cellSize)) * cellSize;
    if (grid[i] === 1) {
      ctx.fillStyle = '#FBFBFB';
    } else {
      ctx.fillStyle = '#332D2D';
    }
    ctx.fillRect(x, y, cellSize, cellSize);
  }
}

setInterval(() => {
  grid = update(grid);
  draw(grid);
}, 1000 / fps);
