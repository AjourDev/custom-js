const canvas = document.createElement("canvas");
canvas.width = 600;
canvas.height = 400;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

fps = 10

// ball position and speed
let x = 50;
let y = 50;
let vx = 5;
let vy = 5;

// ball radius
const r = 20;

// update ball position
const update = () => {
  x += vx;
  y += vy;

  // bounce off walls and randomly change direction
  if (x + r > canvas.width || x - r < 0) {
    vx *= -1;
    vy = Math.random() * 10 - 5;
  }
  if (y + r > canvas.height || y - r < 0) {
    vy *= -1;
    vx = Math.random() * 10 - 5;
  }
};

// render ball
const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
};

// game loop
setInterval(() => {
  update();
  render();
}, 1000 / fps);
