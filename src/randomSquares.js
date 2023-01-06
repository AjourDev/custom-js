const canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// square parameters
const size = 50;
const fps = 10;

// array of square positions and colors
const squares = [];

for (let i = 0; i < (canvas.width / size) * (canvas.height / size); i++) {
  squares.push({
    x: (i % (canvas.width / size)) * size,
    y: Math.floor(i / (canvas.width / size)) * size,
    color: "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
  });
}

// update squares
const update = () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].color = "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
  }
};

// render squares
const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < squares.length; i++) {
    ctx.fillStyle = squares[i].color;
    ctx.fillRect(squares[i].x, squares[i].y, size, size);
  }
};

// game loop
setInterval(() => {
  update();
  render();
}, 1000 / fps);
