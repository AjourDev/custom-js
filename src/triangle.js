const canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// triangle parameters
const x = 250;
const y = 250;
const size = 200;
const speed = 0.5;
const fps = 10;

let angle = 0;

// update triangle
const update = () => {
  angle += speed;
};

// render triangle
const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(x + size * Math.cos(angle), y + size * Math.sin(angle));
  ctx.lineTo(
    x + size * Math.cos(angle + (2 * Math.PI) / 3),
    y + size * Math.sin(angle + (2 * Math.PI) / 3)
  );
  ctx.lineTo(
    x + size * Math.cos(angle + (4 * Math.PI) / 3),
    y + size * Math.sin(angle + (4 * Math.PI) / 3)
  );
  ctx.closePath();
  ctx.strokeStyle = "rgb(" +
  Math.floor(Math.random() * 256) +
  "," +
  Math.floor(Math.random() * 256) +
  "," +
  Math.floor(Math.random() * 256) +
  ")";
  ctx.stroke();
};

// game loop
setInterval(() => {
  update();
  render();
}, 1000 / fps);
